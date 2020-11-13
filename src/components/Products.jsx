import React from "react";
import { useSelector } from "react-redux";
import StyledCardDeck from "../styledComponents/StyledCardDeck";

export default function Products() {
  const products = useSelector((state) => state.products);
  return (
    <section>
      <h3>Make someone happy with our Calligraphy</h3>
      <p>
        <strong>
          This is just mock-up (demo) of the e-shop. It sells nothing!
        </strong>
      </p>

      <StyledCardDeck></StyledCardDeck>

      {products.map((product) => (
        <p>{product.name}</p>
      ))}
    </section>
  );
}
