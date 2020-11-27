import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addOrderInfo } from "../redux/actions";
import StyledFieldset from "../styledComponents/StyledFieldset";
import StyledForm from "../styledComponents/StyledForm";
import StyledWarning from "../styledComponents/StyledWarning";
import OrderButtonsMain from "./OrderButtonsMain";
import dhl from "../assets/images/order-icons/dhl.svg";
import fedex from "../assets/images/order-icons/fedex.svg";
import pickUp from "../assets/images/order-icons/pickUp.svg";
import cash from "../assets/images/order-icons/cash.svg";
import paypal from "../assets/images/order-icons/paypal.svg";
import visa from "../assets/images/order-icons/visa.svg";

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
      <StyledFieldset>
        <legend>Shipping</legend>
        <label>
          <input
            required
            type="radio"
            name="delivery"
            value="dhl"
            onChange={getValue}
            checked={delivery === "dhl" ? true : false}
          />
          <img src={dhl} alt="dhl delivery option" className="dhl" />
        </label>
        <label>
          <input
            type="radio"
            name="delivery"
            value="fedex"
            onChange={getValue}
            checked={delivery === "fedex" ? true : false}
          />
          <img src={fedex} alt="fedex delivery option" className="fedex" />
        </label>
        <label>
          <div>
            <input
              type="radio"
              name="delivery"
              value="person"
              onChange={getValue}
              checked={delivery === "person" ? true : false}
            />
            <span>Personal</span>
          </div>
          <img src={pickUp} alt="pick up delivery option" className="pick-up" />
        </label>
      </StyledFieldset>
      <StyledFieldset>
        <legend>Payment</legend>
        <label>
          <input
            required
            type="radio"
            name="payment"
            value="paypal"
            onChange={getValue}
            checked={payment === "paypal" ? true : false}
          />
          <img src={paypal} alt="paypal payment option" className="paypal" />
        </label>
        <label>
          <input
            type="radio"
            name="payment"
            value="credit card"
            onChange={getValue}
            checked={payment === "credit card" ? true : false}
          />
          <img src={visa} alt="credit card payment option" className="visa" />
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
          <img src={cash} alt="cash payment option" className="cash" />
          <div>
            <small>Just personal shipping</small>
          </div>
        </label>
      </StyledFieldset>
      {warning ? (
        <StyledWarning>
          Please choose shipping and payment options
        </StyledWarning>
      ) : null}
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
