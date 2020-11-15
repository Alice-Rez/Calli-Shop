import React from "react";
import { useDispatch } from "react-redux";
import { addItemToOrder, changeProductStock } from "../redux/actions";
import StyledButton from "../styledComponents/StyledButton";
import StyledInput from "../styledComponents/StyledInput";

export default function SpinControl(props) {
  const { item, available, setQty, place } = props;

  const dispatch = useDispatch();

  const increaseQty = () => {
    if (place === "card" && available - item.qty > 0) {
      setQty({ ...item, qty: item.qty + 1 });
    } else if (place === "list" && available > 0) {
      dispatch(addItemToOrder(item, 1));
      dispatch(changeProductStock(item.id, -1));
    }
  };

  const decreaseQty = () => {
    if (item.qty > 1) {
      if (place === "card") {
        setQty({ ...item, qty: item.qty - 1 });
      } else {
        dispatch(addItemToOrder(item, -1));
        dispatch(changeProductStock(item.id, 1));
      }
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
        disabled={
          place === "card"
            ? available - item.qty <= 0
              ? true
              : false
            : available <= 0
            ? true
            : false
        }
        onClick={increaseQty}
      >
        {" "}
        +{" "}
      </StyledButton>
    </span>
  );
}
