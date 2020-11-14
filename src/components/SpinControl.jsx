import React from "react";
import StyledButton from "../styledComponents/StyledButton";
import StyledInput from "../styledComponents/StyledInput";

export default function SpinControl(props) {
  const { qty } = props;

  return (
    <span>
      <StyledButton
        spinControl
        id="dec"
        // disabled={amount === 0 ? true : false}
        // onClick={() => {
        //   dispatch(removeItem(name));
        // }}
      >
        {" "}
        -{" "}
      </StyledButton>
      <StyledInput type="text" name="number" value={qty} readOnly />
      <StyledButton
        spinControl
        id="inc"
        // disabled={available <= 0 ? true : false}
        // onClick={() => {
        //   dispatch(addItem(name, price));
        // }}
      >
        {" "}
        +{" "}
      </StyledButton>
    </span>
  );
}
