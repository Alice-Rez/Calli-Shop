import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { clearOrder, toggleBasketVisibility } from "../redux/actions";
import StyledSection from "../styledComponents/StyledSection";
import StyledButton from "../styledComponents/StyledButton";
import StyledFlex from "../styledComponents/StyledFlex";
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

  let textLeft, actionLeft, textRight, actionRight, formId;

  const getButtonsSpec = () => {
    textLeft = "previous";
    textRight = "next";
    actionLeft = () => {
      changePage(page - 1);
    };
    switch (page) {
      case 0:
        textLeft = "back to Shop";
        actionLeft = goToShop;
        textRight = "go to order";
        formId = "orderDetails";
        actionRight = () => {
          console.log("change page to 1");
          changePage(1);
        };
        break;
      case 1:
        formId = "orderPersonal";
        break;
      case 2:
        formId = "orderShipPay";
        break;
      case 3:
        textRight = "Order";
        actionRight = () => {
          changePage(4);
          dispatch(clearOrder());
        };
        break;
      default:
        return null;
    }
  };

  const goToShop = () => {
    history.push("/");
    dispatch(toggleBasketVisibility());
  };

  const changePage = (value) => {
    console.log(page);
    setPage(value);
  };

  getButtonsSpec();

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
      {page === 3 ? <OrderConfirm /> : null}
      {page === 4 ? <OrderSuccess /> : null}
      {page > 2 && page < 4 ? (
        <StyledFlex basket>
          <StyledButton primary basketMain onClick={actionLeft}>
            &#8678; {textLeft}
          </StyledButton>
          <StyledButton
            primary
            basketMain
            type="submit"
            form={
              (page === 0 && customNamesProd) || page === 1 || page === 2
                ? formId
                : null
            }
            onClick={
              page === 3 || (page === 0 && !customNamesProd)
                ? actionRight
                : null
            }
          >
            {textRight} &#8680;
          </StyledButton>
        </StyledFlex>
      ) : null}
    </StyledSection>
  );
}
