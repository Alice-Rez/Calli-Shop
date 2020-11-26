import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import countryList from "../data/countries";
import { addOrderInfo } from "../redux/actions";
import StyledForm from "../styledComponents/StyledForm";
import StyledInput from "../styledComponents/StyledInput";
import StyledSelect from "../styledComponents/StyledSelect";
import StyledWarning from "../styledComponents/StyledWarning";

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
    console.log("form submitted");
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
      <div>
        <label htmlFor="firstName">First Name</label>
        <StyledInput
          required
          type="text"
          id="firstName"
          name="firstName"
          value={customer.firstName || ""}
          onInput={getValue}
        />
      </div>
      <div>
        <label htmlFor="lastName">Last Name</label>
        <StyledInput
          required
          type="text"
          id="lastName"
          name="lastName"
          value={customer.lastName || ""}
          onInput={getValue}
        />
      </div>
      <div>
        <label htmlFor="email">E-mail</label>
        <StyledInput
          required
          type="email"
          id="email"
          name="email"
          value={customer.email || ""}
          onInput={getValue}
        />
      </div>
      <div>
        <label htmlFor="phone">Telephone nr.</label>
        <StyledInput
          required
          type="tel"
          id="phone"
          name="phone"
          value={customer.phone || ""}
          onInput={getValue}
        />
      </div>
      <div>
        <label htmlFor="address">Address</label>
        <StyledInput
          required
          type="text"
          id="address"
          name="address"
          value={customer.address || ""}
          onInput={getValue}
        />
      </div>
      <div>
        <label htmlFor="zip">Zip code</label>
        <StyledInput
          required
          type="text"
          id="zip"
          name="zip"
          value={customer.zip || ""}
          onInput={getValue}
        />
      </div>
      <div>
        <label htmlFor="city">City</label>
        <StyledInput
          required
          type="text"
          id="city"
          name="city"
          value={customer.city || ""}
          onInput={getValue}
        />
      </div>
      <div>
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
      </div>
      <div>
        <input required type="checkbox" name="" id="agreement" />
        <label htmlFor="agreement">
          {" "}
          I agree with terms of use & Privacy Policy
        </label>
      </div>
      {warning ? (
        <StyledWarning>Please fill all fields correctly</StyledWarning>
      ) : null}
    </StyledForm>
  );
}
