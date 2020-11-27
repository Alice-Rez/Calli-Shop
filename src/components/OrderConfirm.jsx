import React from "react";
import { useDispatch } from "react-redux";
import { clearOrder } from "../redux/actions";
import OrderButtonsMain from "./OrderButtonsMain";

export default function OrderConfirm(props) {
  const dispatch = useDispatch();

  return (
    <div>
      Here will be summary of the order & possibility to go edit every part.....
      <OrderButtonsMain
        textLeft={"previous"}
        textRight={"order"}
        actionLeft={() => {
          props.setPage(2);
        }}
        actionRight={() => {
          props.setPage(4);
          dispatch(clearOrder());
        }}
      />
    </div>
  );
}
