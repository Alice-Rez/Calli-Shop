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

  useEffect(() => {
    let results = Object.values(order.details).reduce((acc, value, index) => {
      let key = Object.keys(order.details)[index];
      if (value !== "standalone" && key.startsWith("location")) {
        acc.push(value);
        let nameIndex = Object.keys(order.details).indexOf(
          `name${+key.split("location")[1]}`
        );
        acc.push(Object.values(order.details)[nameIndex]);
      }
      return acc;
    }, []);
    setWithName(results);
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
        <caption>Order:</caption>
        <thead>
          <tr>
            <th>Product name</th>
            {withName.length > 0 ? <th>Details</th> : null}
            <th>Price</th>
            <th>Qty</th>
            <th>Price total</th>
          </tr>
        </thead>
        <tbody>
          {order.items.map((item, index) => {
            return (
              <tr key={index}>
                <td>{item.name}</td>
                {withName.length > 0 ? (
                  <td>
                    {withName.map((name, index, array) => {
                      console.log(item.name);
                      if (
                        item.name.toLowerCase().includes(name.toLowerCase())
                      ) {
                        return array[index + 1];
                      }
                      return null;
                    })}
                  </td>
                ) : null}
                <td>{item.price}</td>
                <td>{item.qty}</td>
                <td>{item.priceSum}</td>
              </tr>
            );
          })}
        </tbody>
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
