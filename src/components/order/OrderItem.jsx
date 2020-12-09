import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  changeProductStock,
  clearDetails,
  deleteItem,
} from "../../redux/actions";
import StyledButton from "../../styledComponents/StyledButton";
import SpinControl from "../SpinControl";

export default function OrderItem(props) {
  const { item } = props;
  const available = useSelector(
    (state) => state.products[item.id - 1].available
  );
  const dispatch = useDispatch();

  return (
    <tr>
      <td>{item.name}</td>
      <td>{item.price} &#8364;</td>
      <td>
        <SpinControl item={item} available={available} place="list" />
      </td>
      <td>{item.priceSum.toFixed(2)} &#8364;</td>
      <td>
        <StyledButton
          spinControl
          primaryReverse
          onClick={() => {
            dispatch(deleteItem(item.id));
            dispatch(changeProductStock(item.id, item.qty));
            if (item.name === "Customized name") {
              dispatch(clearDetails());
            }
          }}
        >
          &#10005;
        </StyledButton>
      </td>
    </tr>
  );
}
