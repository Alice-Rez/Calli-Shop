import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addOrderInfo } from "../redux/actions";
import StyledInput from "../styledComponents/StyledInput";
import StyledSection from "../styledComponents/StyledSection";
import StyledSelect from "../styledComponents/StyledSelect";
import StyledWarning from "../styledComponents/StyledWarning";
import OrderButtonsMain from "./OrderButtonsMain";

export default function OrderDetails(props) {
  const items = useSelector((state) => state.order.items);
  const [details, setDetails] = useState(
    useSelector((state) => state.order.details)
  );
  const dispatch = useDispatch();

  const [familyProd, setFamilyProd] = useState(false);
  const [loveProd, setLoveProd] = useState(false);
  const [strongWillProd, setStrongWillProd] = useState(false);
  const [namesQty, setNamesQty] = useState(0);
  const [customQtyArray, setCustomQtyArray] = useState([]);
  const [warning, setWarning] = useState(false);

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

  useEffect(() => {
    let helper = [];
    // nullArray();
    // setCustomQtyArray(null);
    // setCustomQtyArray([]);
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

  const getValue = (e) => {
    setDetails({ ...details, [e.target.name]: e.target.value });
  };

  const submitOrderDetails = (e) => {
    e.preventDefault();

    if (e.target.checkValidity()) {
      setWarning(false);
      dispatch(addOrderInfo("details", details));
      props.setPage(1);
    } else {
      setWarning(true);
    }
  };

  return (
    <StyledSection orderDetails>
      <p>
        You want to buy customized names. Please give us following additional
        information
      </p>
      <p>- which name(s) and where you want to have written:</p>
      <form id="orderDetails" onSubmit={submitOrderDetails} noValidate>
        {customQtyArray.map((item, index) => (
          <StyledSection detailsRow key={index}>
            <label htmlFor={`name${item}`}>Name {item} </label>
            <StyledInput
              required
              type="text"
              id={`name${item}`}
              name={`name${item}`}
              value={details[`name${item}`] || ""}
              onChange={getValue}
            />
            <label htmlFor={`location${item}`}>Location {item}</label>
            <StyledSelect
              required
              name={`location${item}`}
              id={`location${item}`}
              defaultValue={details[`location${item}`] || ""}
              onChange={getValue}
            >
              <option value="">--- Choose one ---</option>
              <option value="standalone">Standalone</option>
              {familyProd ? <option value="family">Family</option> : null}
              {loveProd ? <option value="love">Love</option> : null}
              {strongWillProd ? (
                <option value="strong-will">Strong will-Kakizome</option>
              ) : null}
            </StyledSelect>
          </StyledSection>
        ))}
        {warning ? <StyledWarning>Please fill all fields</StyledWarning> : null}
        <OrderButtonsMain
          textLeft={"back to Shop"}
          actionLeft={props.goToShop}
          textRight={"go to order"}
          actionRight={null}
        />
      </form>
    </StyledSection>
  );
}
