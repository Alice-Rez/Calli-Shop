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
      <td>{item.price} </td>
      <td>
        <SpinControl item={item} available={available} place="list" />
      </td>
    </tr>
  );
}
