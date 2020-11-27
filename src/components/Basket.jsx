import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { toggleBasketVisibility } from "../redux/actions";
import StyledSection from "../styledComponents/StyledSection";
import OrderDetails from "./OrderDetails";
import OrderList from "./OrderList";
import OrderStepper from "./OrderStepper";
import OrderPersonal from "./OrderPersonal";
import OrderShipPay from "./OrderShipPay";
import OrderConfirm from "./OrderConfirm";
import OrderSuccess from "./OrderSuccess";
import OrderButtonsMain from "./OrderButtonsMain";

export default function Basket() {
  let history = useHistory();
  let dispatch = useDispatch();

  const items = useSelector((state) => state.order.items);
  const [customNamesProd, setCustomNamesProd] = useState(false);

  const [page, setPage] = useState(0);

  const goToShop = () => {
    history.push("/");
    dispatch(toggleBasketVisibility());
  };

  const changePage = (value) => {
    console.log(page);
    setPage(value);
  };

  useEffect(() => {
    let customizedNameItemExist = false;
    items.map((item) => {
      if (item.name === "Customized name") {
        setCustomNamesProd(true);
        customizedNameItemExist = true;
      }
      return null;
    });
    if (!customizedNameItemExist) {
      setCustomNamesProd(false);
    }
  }, [items]);

  return (
    <StyledSection basket>
      {page === 0 ? (
        <React.Fragment>
          <OrderList />
          {customNamesProd ? (
            <OrderDetails setPage={setPage} goToShop={goToShop} />
          ) : (
            <OrderButtonsMain
              textLeft={"back to Shop"}
              actionLeft={goToShop}
              textRight={"go to order"}
              actionRight={() => {
                console.log("change page to 1");
                changePage(1);
              }}
            />
          )}
        </React.Fragment>
      ) : null}
      {page > 0 ? <OrderStepper page={page} /> : null}
      {page === 1 ? <OrderPersonal setPage={setPage} /> : null}
      {page === 2 ? <OrderShipPay setPage={setPage} /> : null}
      {page === 3 ? <OrderConfirm setPage={setPage} /> : null}
      {page === 4 ? <OrderSuccess /> : null}
    </StyledSection>
  );
}
