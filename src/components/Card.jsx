import React, { useState } from "react";
import StyledCard from "../styledComponents/StyledCard";
import family from "../assets/images/products/family.svg";
import harmony from "../assets/images/products/harmony.svg";
import love from "../assets/images/products/love.svg";
import arigato from "../assets/images/products/arigato.svg";
import names from "../assets/images/products/names.svg";
import strongWill from "../assets/images/products/strong-will.svg";
import samuraiJourney from "../assets/images/products/virtue-of-samurai/samurai-journey.svg";
import StyledButton from "../styledComponents/StyledButton";
import SpinControl from "./SpinControl";

export default function Card(props) {
  const {
    id,
    name,
    style,
    img,
    details,
    price,
    available,
    alt,
  } = props.product;

  const [item, setItem] = useState({
    id,
    name,
    price,
    qty: 1,
  });

  let image;

  let chooseImage = (string) => {
    switch (string) {
      case "family":
        image = family;
        break;
      case "harmony":
        image = harmony;
        break;
      case "love":
        image = love;
        break;
      case "arigato":
        image = arigato;
        break;
      case "names":
        image = names;
        break;
      case "strong-will":
        image = strongWill;
        break;
      default:
        image = samuraiJourney;
        break;
    }
  };

  chooseImage(img);

  return (
    <StyledCard>
      <img src={image} className="card-img-top" alt={alt} />
      <div className="card-body">
        <h4>{name}</h4>
        <h5>{style}</h5>
        <p>{details}</p>
        <p>
          <strong>{price} &#8364;</strong>
          <SpinControl qty={item.qty} />
        </p>
        {available ? (
          <StyledButton primary>Buy</StyledButton>
        ) : (
          <p className="sold-out">Sold out</p>
        )}
      </div>
    </StyledCard>
  );
}
