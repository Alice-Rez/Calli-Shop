import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import StyledInput from "../styledComponents/StyledInput";
import StyledSection from "../styledComponents/StyledSection";
import StyledSelect from "../styledComponents/StyledSelect";

export default function OrderDetails() {
  const items = useSelector((state) => state.order.items);

  const [familyProd, setFamilyProd] = useState(false);
  const [loveProd, setLoveProd] = useState(false);
  const [strongWillProd, setStrongWillProd] = useState(false);
  const [namesQty, setNamesQty] = useState(0);
  const [customQtyArray, setCustomQtyArray] = useState([]);

  useEffect(() => {
    let familyItemExist = false;
    let loveItemExist = false;
    let strongWillItemExist = false;

    items.map((item) => {
      if (item.name === "'Ka' - Family") {
        setFamilyProd(true);
        familyItemExist = true;
      } else if (item.name === "'Ai' - Love") {
        setLoveProd(true);
        loveItemExist = true;
      } else if (item.name === "Strong Will") {
        setStrongWillProd(true);
        strongWillItemExist = true;
      } else if (item.name === "Customized name") {
        setNamesQty(item.qty);
      }
      return item;
    });
    if (!familyItemExist) {
      setFamilyProd(false);
    }
    if (!loveItemExist) {
      setLoveProd(false);
    }
    if (!strongWillItemExist) {
      setStrongWillProd(false);
    }
  }, [items]);

  const nullArray = () => {
    setCustomQtyArray([]);
  };

  useEffect(() => {
    let helper = [];
    // nullArray();
    console.log("before for loop:", customQtyArray, namesQty);
    for (let i = 1; i <= namesQty; i++) {
      console.log("in the loop:", customQtyArray, namesQty);
      // setCustomQtyArray([...customQtyArray, i]);
      helper.push(i);
    }
    console.log("after for loop:", customQtyArray, namesQty);
    setCustomQtyArray(helper);
    // return () => {
    //   setCustomQtyArray([]);
    // };
  }, [namesQty]);

  return (
    <StyledSection orderDetails>
      <p>
        You want to buy customized names. Please give us following additional
        information
      </p>
      <p>- which name(s) and where you want to have written:</p>
      {customQtyArray.map((item, index) => (
        <StyledSection key={index} detailsRow>
          <label htmlFor="names">Name {item} </label>
          <StyledInput type="text" id={`name${item}`} name={`name${item}`} />
          <label htmlFor="location1">Location {item}</label>
          <StyledSelect name={`location${item}`} id={`name${item}`}>
            <option value="standalone">Standalone</option>
            {familyProd ? <option value="family">Family</option> : null}
            {loveProd ? <option value="love">Love</option> : null}
            {strongWillProd ? (
              <option value="strong-will">Strong will-Kakizome</option>
            ) : null}
          </StyledSelect>
        </StyledSection>
      ))}
    </StyledSection>
  );
}
