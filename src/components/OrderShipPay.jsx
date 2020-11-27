import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addOrderInfo } from "../redux/actions";
import StyledForm from "../styledComponents/StyledForm";
import StyledWarning from "../styledComponents/StyledWarning";
import OrderButtonsMain from "./OrderButtonsMain";

export default function OrderPersonal(props) {
  const delivery = useSelector((state) => state.order.delivery);
  const payment = useSelector((state) => state.order.payment);
  const dispatch = useDispatch();

  const [warning, setWarning] = useState(false);

  const submitOrderShipPay = (e) => {
    e.preventDefault();
    if (e.target.checkValidity()) {
      setWarning(false);
      props.setPage(3);
    } else {
      setWarning(true);
    }
  };

  const getValue = (e) => {
    dispatch(addOrderInfo(e.target.name, e.target.value));
  };

  return (
    <StyledForm id="orderShipPay" onSubmit={submitOrderShipPay} noValidate>
      <fieldset>
        <legend>Shipping</legend>
        <label>
          <input
            type="radio"
            name="delivery"
            value="dhl"
            onChange={getValue}
            checked={delivery === "dhl" ? true : false}
          />
          DHL
        </label>
        <label>
          <input
            type="radio"
            name="delivery"
            value="fedex"
            onChange={getValue}
            checked={delivery === "fedex" ? true : false}
          />
          FedEx
        </label>
        <label>
          <input
            type="radio"
            name="delivery"
            value="person"
            onChange={getValue}
            checked={delivery === "person" ? true : false}
          />
          Pick up in shop
        </label>
      </fieldset>
      <fieldset>
        <legend>Payment</legend>
        <label>
          <input
            type="radio"
            name="payment"
            value="paypal"
            onChange={getValue}
            checked={payment === "paypal" ? true : false}
          />
          PayPal
        </label>
        <label>
          <input
            type="radio"
            name="payment"
            value="credit card"
            onChange={getValue}
            checked={payment === "credit card" ? true : false}
          />
          Credit Card
        </label>
        <label>
          <input
            type="radio"
            name="payment"
            value="cash"
            onChange={getValue}
            checked={
              payment === "cash" && (delivery === "person" || delivery === "")
                ? true
                : false
            }
            disabled={delivery === "dhl" || delivery === "fedex" ? true : false}
          />
          Cash
          <small>
            Possible just for picking up the delivery from shop personally
          </small>
        </label>
      </fieldset>
      {warning ? <StyledWarning>Please fill all fields</StyledWarning> : null}
      <OrderButtonsMain
        textLeft={"previous"}
        textRight={"next"}
        actionLeft={() => {
          props.setPage(1);
        }}
      />
    </StyledForm>
  );
}
