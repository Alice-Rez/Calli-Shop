import React, { useState, useEffect } from "react";
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
import { useDispatch } from "react-redux";
import { addItemToOrder, changeProductStock } from "../redux/actions";
import StyledFlex from "../styledComponents/StyledFlex";

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

  const dispatch = useDispatch();

  const [item, setItem] = useState({
    id,
    name,
    price,
    qty: 1,
    priceSum: price,
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

  // the order of useEffects is important, if I wrote it differently, it would be able to click on item that is no more available

  useEffect(() => {
    let priceSum = item.price * item.qty;
    setItem({ ...item, priceSum: +priceSum.toFixed(2) });
  }, [item.qty]);

  useEffect(() => {
    if (available === 0) {
      setItem({ ...item, qty: 0 });
    }
  }, [available]);

  const buyItem = () => {
    dispatch(addItemToOrder(item));
    dispatch(changeProductStock(item.id, -item.qty));
    if (available > 0) {
      setItem({ ...item, qty: 1 });
    } else {
      setItem({ ...item, qty: 0 });
    }
  };

  return (
    <StyledCard>
      <img src={image} className="card-img-top" alt={alt} />
      <div className="card-body">
        <h4>{name}</h4>
        <h5>{style}</h5>
        <p>{details}</p>
        <StyledFlex>
          <strong>{price} &#8364;</strong>
          <SpinControl
            item={item}
            available={available}
            setQty={setItem}
            place="card"
          />
        </StyledFlex>
        {item.qty > 0 ? (
          <StyledButton primary onClick={buyItem}>
            Add to basket
          </StyledButton>
        ) : (
          <p className="sold-out">Sold out</p>
        )}
      </div>
    </StyledCard>
  );
}
