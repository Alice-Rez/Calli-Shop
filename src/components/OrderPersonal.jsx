import React, { useState } from "react";
import StyledForm from "../styledComponents/StyledForm";
import StyledInput from "../styledComponents/StyledInput";
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
    <StyledForm id="orderPersonal" onSubmit={submitOrderPersonal} noValidate>
      <div>
        <label htmlFor="firstName">First Name</label>
        <StyledInput required type="text" id="firstName" name="firstName" />
      </div>
      <div>
        <label htmlFor="lastName">Last Name</label>
        <StyledInput required type="text" id="lastName" name="lastName" />
      </div>
      {warning ? <StyledWarning>Please fill all fields</StyledWarning> : null}
    </StyledForm>
  );
}
