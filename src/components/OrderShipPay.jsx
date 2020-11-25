import React, { useState } from "react";
import StyledWarning from "../styledComponents/StyledWarning";

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
    <form id="orderShipPay" onSubmit={submitOrderShipPay} noValidate>
      <p>Here will be form with shipping & payment details</p>
      <input type="text" required />
      {warning ? <StyledWarning>Please fill all fields</StyledWarning> : null}
    </form>
  );
}
