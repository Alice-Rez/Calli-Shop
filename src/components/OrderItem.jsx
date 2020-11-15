import React from "react";
import { useSelector } from "react-redux";
import SpinControl from "./SpinControl";

export default function OrderItem(props) {
  const { item } = props;
  const available = useSelector(
    (state) => state.products[item.id - 1].available
  );

  return (
    <tr>
      <td>{item.name}</td>
      <td>{item.price} &#8364;</td>
      <td>
        <SpinControl item={item} available={available} place="list" />
      </td>
      <td>{item.priceSum.toFixed(2)} &#8364;</td>
    </tr>
  );
}
