import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import countryList from "../data/countries";
import { addOrderInfo } from "../redux/actions";
import StyledForm from "../styledComponents/StyledForm";
import StyledGrid from "../styledComponents/StyledGrid";
import StyledInput from "../styledComponents/StyledInput";
import StyledSelect from "../styledComponents/StyledSelect";
import StyledWarning from "../styledComponents/StyledWarning";
import OrderButtonsMain from "./OrderButtonsMain";

export default function OrderPersonal(props) {
  const [warning, setWarning] = useState(false);
  const [customer, setCustomer] = useState(
    useSelector((state) => state.order.customer)
  );

  const dispatch = useDispatch();

  const getValue = (e) => {
    setCustomer({ ...customer, [e.target.name]: e.target.value });
  };

  const submitOrderPersonal = (e) => {
    console.log("form personal submitted");
    e.preventDefault();

    if (e.target.checkValidity()) {
      setWarning(false);
      dispatch(addOrderInfo("customer", customer));
      props.setPage(2);
    } else {
      setWarning(true);
    }
  };
  return (
    <StyledForm id="orderPersonal" onSubmit={submitOrderPersonal} noValidate>
      <StyledGrid formGrid>
        <label htmlFor="firstName">First Name</label>
        <StyledInput
          required
          type="text"
          id="firstName"
          name="firstName"
          value={customer.firstName || ""}
          onInput={getValue}
        />
        <label htmlFor="lastName">Last Name</label>
        <StyledInput
          required
          type="text"
          id="lastName"
          name="lastName"
          value={customer.lastName || ""}
          onInput={getValue}
        />
        <label htmlFor="email">E-mail</label>
        <StyledInput
          required
          type="email"
          id="email"
          name="email"
          value={customer.email || ""}
          onInput={getValue}
        />
        <label htmlFor="phone">Telephone nr.</label>
        <StyledInput
          required
          type="tel"
          id="phone"
          name="phone"
          value={customer.phone || ""}
          onInput={getValue}
        />
        <label htmlFor="address">Address</label>
        <StyledInput
          required
          type="text"
          id="address"
          name="address"
          value={customer.address || ""}
          onInput={getValue}
        />
        <label htmlFor="zip">Zip code</label>
        <StyledInput
          required
          type="text"
          id="zip"
          name="zip"
          value={customer.zip || ""}
          onInput={getValue}
        />
        <label htmlFor="city">City</label>
        <StyledInput
          required
          type="text"
          id="city"
          name="city"
          value={customer.city || ""}
          onInput={getValue}
        />
        <label htmlFor="country">Country</label>
        <StyledSelect
          required
          name="country"
          id="country"
          defaultValue={customer.country || ""}
          onChange={getValue}
        >
          <option value="">--- Choose one ---</option>
          {countryList.map((country) => (
            <option value={country} key={country}>
              {country}
            </option>
          ))}
        </StyledSelect>
      </StyledGrid>
      <div className="last">
        <input required type="checkbox" name="" id="agreement" />
        <label htmlFor="agreement">
          {" "}
          I agree with Terms of use & Privacy Policy
        </label>
      </div>
      {warning ? (
        <StyledWarning>Please fill all fields correctly</StyledWarning>
      ) : null}
      <OrderButtonsMain
        textLeft={"previous"}
        textRight={"next"}
        actionLeft={() => {
          props.setPage(0);
        }}
      />
    </StyledForm>
  );
}
