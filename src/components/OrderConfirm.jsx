import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearOrder } from "../redux/actions";
import StyledSection from "../styledComponents/StyledSection";
import StyledTable from "../styledComponents/StyledTable";
import OrderButtonsMain from "./OrderButtonsMain";

export default function OrderConfirm(props) {
  const order = useSelector((state) => state.order);
  const dispatch = useDispatch();
  const [withName, setWithName] = useState([]);
  const [standalone, setStandalone] = useState([]);

  useEffect(() => {
    let alone = [];
    let added = [];

    Object.values(order.details).map((value, index) => {
      let key = Object.keys(order.details)[index];
      let nameIndex = Object.keys(order.details).indexOf(
        `name${+key.split("location")[1]}`
      );
      if (value !== "standalone" && key.startsWith("location")) {
        added.push(value);
        added.push(Object.values(order.details)[nameIndex]);
      } else if (value === "standalone" && key.startsWith("location")) {
        alone.push(Object.values(order.details)[nameIndex]);
      }
      return value;
    });

    console.log(added, alone);
    setWithName(added);
    setStandalone(alone);
  }, []);

  return (
    <React.Fragment>
      <h4>Order Summary</h4>
      <StyledSection confirmation>
        <h5>Customer:</h5>
        <p>
          {order.customer.firstName} {order.customer.lastName} <br />
          {order.customer.address} <br />
          {order.customer.zip} {order.customer.city}
          <br />
          {order.customer.country}
          <br />
        </p>
        <p>
          {order.customer.email} <br />
          {order.customer.phone}
        </p>
        <h5>Payment method:</h5>
        <p>{order.payment}</p>
        <h5>Shipping method:</h5>
        <p>{order.delivery}</p>
      </StyledSection>
      <StyledTable confirmation>
        <caption>Ordered items:</caption>
        <thead>
          <tr>
            <th>Product name</th>
            {withName.length > 0 || standalone.length > 0 ? (
              <th>Details</th>
            ) : null}
            <th>Unit price</th>
            <th>Qty</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {order.items.map((item, index) => {
            return (
              <tr key={index}>
                <td>{item.name}</td>
                {withName.length > 0 || standalone.length > 0 ? (
                  <td className="details">
                    {withName.length > 0
                      ? withName.map((name, index, array) => {
                          if (
                            item.name.toLowerCase().includes(name.toLowerCase())
                          ) {
                            return array[index + 1] + " ";
                          }
                          return null;
                        })
                      : null}
                    {item.name === "Customized name" && standalone.length > 0
                      ? standalone.map((name) => {
                          console.log(name);
                          return name + " ";
                        })
                      : null}
                  </td>
                ) : null}
                <td>{item.price} &#8364;</td>
                <td>{item.qty}</td>
                <td>{item.priceSum} &#8364;</td>
              </tr>
            );
          })}
          <tr>
            <td
              colSpan={withName.length > 0 || standalone.length > 0 ? "3" : "2"}
            ></td>
            <td>Sum</td>
            <td>{order.priceSumTotal.toFixed(2)} &#8364;</td>
          </tr>
          <tr>
            <td
              colSpan={withName.length > 0 || standalone.length > 0 ? "3" : "2"}
            ></td>
            <td>Delivery</td>
            <td>0 &#8364;</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <th
              colSpan={withName.length > 0 || standalone.length > 0 ? "3" : "2"}
            ></th>
            <th>Total</th>
            <th>{order.priceSumTotal.toFixed(2)} &#8364;</th>
          </tr>
        </tfoot>
      </StyledTable>

      <OrderButtonsMain
        textLeft={"previous"}
        textRight={"order"}
        actionLeft={() => {
          props.setPage(2);
        }}
        actionRight={() => {
          props.setPage(4);
          dispatch(clearOrder());
        }}
      />
    </React.Fragment>
  );
}
