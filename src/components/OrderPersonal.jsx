import React, { useState } from "react";
import StyledWarning from "../styledComponents/StyledWarning";

export default function OrderPersonal(props) {
  const [warning, setWarning] = useState(false);
  const submitOrderPersonal = (e) => {
    e.preventDefault();

    if (e.target.checkValidity()) {
      setWarning(false);
      props.setPage(2);
    } else {
      setWarning(true);
    }
  };
  return (
    <form id="orderPersonal" onSubmit={submitOrderPersonal} noValidate>
      <p>Here will be form with personal data</p>
      <input type="text" required />
      {warning ? <StyledWarning>Please fill all fields</StyledWarning> : null}
    </form>
  );
}
