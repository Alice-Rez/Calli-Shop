import React from "react";
import StyledButton from "../styledComponents/StyledButton";
import StyledInput from "../styledComponents/StyledInput";

export default function SpinControl(props) {
  const { item, available, setQty } = props;

  const increaseQty = () => {
    if (available > 0) {
      setQty({ ...item, qty: item.qty + 1 });
    }
  };

  const decreaseQty = () => {
    if (item.qty > 1) {
      setQty({ ...item, qty: item.qty - 1 });
    }
  };

  return (
    <span>
      <StyledButton
        spinControl
        id="dec"
        disabled={item.qty < 2 ? true : false}
        onClick={decreaseQty}
      >
        {" "}
        -{" "}
      </StyledButton>
      <StyledInput type="text" name="number" value={item.qty} readOnly />
      <StyledButton
        spinControl
        id="inc"
        disabled={available <= 0 ? true : false}
        onClick={increaseQty}
      >
        {" "}
        +{" "}
      </StyledButton>
    </span>
  );
}