import React from "react";
import StyledCard from "../styledComponents/StyledCard";
import placeholder from "../assets/images/products/strong-will.svg";

export default function Card(props) {
  const { name, style, img, details, price, available, alt } = props.product;
  return (
    <StyledCard>
      <img src={placeholder} className="card-img-top" alt={alt} />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{style}</h6>
        <p className="card-text">{details}</p>
        <p className="price">
          <strong>{price} &#8364;</strong>
        </p>
      </div>
    </StyledCard>
  );
}
