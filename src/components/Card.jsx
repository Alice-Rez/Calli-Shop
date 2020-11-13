import React from "react";
import StyledCard from "../styledComponents/StyledCard";
import family from "../assets/images/products/family.svg";
import harmony from "../assets/images/products/harmony.svg";
import love from "../assets/images/products/love.svg";
import arigato from "../assets/images/products/arigato.svg";
import names from "../assets/images/products/names.svg";
import strongWill from "../assets/images/products/strong-will.svg";
import samuraiJourney from "../assets/images/products/virtue-of-samurai/samurai-journey.svg";

export default function Card(props) {
  const { name, style, img, details, price, available, alt } = props.product;

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
        <h4 className="card-title">{name}</h4>
        <h5 className="card-subtitle mb-2 text-muted">{style}</h5>
        <p className="card-text">{details}</p>
        <p className="price">
          <strong>{price} &#8364;</strong>
        </p>
      </div>
    </StyledCard>
  );
}
