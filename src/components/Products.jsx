import React from "react";
import { useSelector } from "react-redux";

export default function Products() {
  const products = useSelector((state) => state.products);
  return (
    <div>
      <h3>Make someone happy with our Calligraphy</h3>
      <p>
        <strong>
          This is just mock-up (demo) of the e-shop. It sells nothing!
        </strong>
      </p>

      {products.map((product) => (
        <p>{product.name}</p>
      ))}
    </div>
  );
}
