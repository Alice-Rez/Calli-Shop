import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearOrder } from "../redux/actions";
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
      <p>Customer:</p>
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
      <p>Payment method:</p>
      <p>{order.payment}</p>
      <p>Shipping method:</p>
      <p>{order.delivery}</p>
      <p>Order:</p>
      <table>
        <thead>
          <tr>
            <th>Product name</th>
            {withName.length > 0 ? <th>With name</th> : null}
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
      </table>

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
