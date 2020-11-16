import React from "react";
import StyledInput from "../styledComponents/StyledInput";
import StyledSection from "../styledComponents/StyledSection";
import StyledSelect from "../styledComponents/StyledSelect";

export default function OrderDetails() {
  return (
    <StyledSection orderDetails>
      <p>
        You want to buy customized names. Please give us following additional
        information
      </p>
      <p>- which name(s) and where you want to have written:</p>
      <label htmlFor="names">Name 1 </label>
      <StyledInput type="text" id="names" name="names" />
      <label htmlFor="location1">Location 1</label>
      <StyledSelect name="location1" id="location1">
        <option value="standalone">Standalone</option>
        <option value="family">Family</option>
        <option value="love">Love</option>
        <option value="strong-will">Strong will-Kakizome</option>
      </StyledSelect>
    </StyledSection>
  );
}
