import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { toggleBasketVisibility } from "../redux/actions";
import StyledSection from "../styledComponents/StyledSection";
import StyledButton from "../styledComponents/StyledButton";
import StyledFlex from "../styledComponents/StyledFlex";
import OrderDetails from "./OrderDetails";
import OrderList from "./OrderList";
import OrderStepper from "./OrderStepper";

export default function Basket() {
  let history = useHistory();
  let dispatch = useDispatch();

  const items = useSelector((state) => state.order.items);
  const [customNamesProd, setCustomNamesProd] = useState(false);

  const [page, setPage] = useState("basket");

  let textLeft, actionLeft, textRight, actionRight;

  const getButtonsSpec = () => {
    textLeft = "previous";
    textRight = "next";
    actionLeft = () => {
      changePage(page - 1);
    };
    actionRight = () => {
      console.log("right default");
      changePage(page + 1);
    };
    switch (page) {
      case "basket":
        textLeft = "back to Shop";
        actionLeft = goToShop;
        textRight = "go to order";
        actionRight = () => {
          changePage(1);
        };
        break;
      case 1:
        actionLeft = () => {
          changePage("basket");
        };
        break;
      case 3:
        textRight = "Order";
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
      {page === "basket" ? (
        <React.Fragment>
          <OrderList />
          {customNamesProd ? <OrderDetails /> : null}
        </React.Fragment>
      ) : null}
      {page !== "basket" ? <OrderStepper page={page} /> : null}
      {page !== 4 ? (
        <StyledFlex basket>
          <StyledButton primary basketMain onClick={actionLeft}>
            &#8678; {textLeft}
          </StyledButton>
          <StyledButton primary basketMain onClick={actionRight}>
            {textRight} &#8680;
          </StyledButton>
        </StyledFlex>
      ) : null}
    </StyledSection>
  );
}
