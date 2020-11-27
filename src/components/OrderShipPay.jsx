import React, { useState } from "react";
import StyledForm from "../styledComponents/StyledForm";
import StyledWarning from "../styledComponents/StyledWarning";
import OrderButtonsMain from "./OrderButtonsMain";

export default function OrderPersonal(props) {
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
  return (
    <StyledForm id="orderShipPay" onSubmit={submitOrderShipPay} noValidate>
      <p>Here will be form with shipping & payment details</p>
      <input type="text" required />
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
