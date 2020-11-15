import React from "react";
import { useSelector } from "react-redux";
import StyledTable from "../styledComponents/StyledTable";
import OrderItem from "./OrderItem";

export default function OrderList() {
  const items = useSelector((state) => state.order.items);
  return (
    <StyledTable>
      <tbody>
        {items.map((item, index) => {
          return <OrderItem item={item} key={index} />;
        })}
      </tbody>
    </StyledTable>
  );
}
