import React from "react";
import { useSelector } from "react-redux";
import StyledTable from "../styledComponents/StyledTable";
import OrderItem from "./OrderItem";

export default function OrderList() {
  const items = useSelector((state) => state.order.items);
  const finalPrice = useSelector((state) => state.order.priceSumTotal);
  return (
    <StyledTable>
      <tbody>
        {items.map((item, index) => {
          return <OrderItem item={item} key={index} />;
        })}
      </tbody>
      <tfoot>
        <tr>
          <td colSpan="2"></td>
          <td>Sum</td>
          <td>{finalPrice.toFixed(2)} &#8364;</td>
          <td></td>
        </tr>
      </tfoot>
    </StyledTable>
  );
}
