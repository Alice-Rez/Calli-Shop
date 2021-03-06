import React from "react";
import { useSelector } from "react-redux";
import StyledCloseButton from "../../styledComponents/StyledCloseButton";
import StyledLink from "../../styledComponents/StyledLink";
import StyledSection from "../../styledComponents/StyledSection";

export default function ShipPay() {
  const isInBasket = useSelector((state) => state.isInBasket);

  return (
    <StyledSection basket>
      <StyledCloseButton>
        <StyledLink to={isInBasket ? "/basket" : "/"}>x</StyledLink>
      </StyledCloseButton>
      <h4>Shipping & Payment Options</h4>
      <p>
        You can have your order delivered by DHL, FedEx or pick it personally in
        our shop. All delivery options are free.
      </p>
      <p>
        Payment options are Paypal and online payment by credit card. If you
        choose to pick up your order in shop, you can also pay when picking
        order by cash.
      </p>
    </StyledSection>
  );
}
