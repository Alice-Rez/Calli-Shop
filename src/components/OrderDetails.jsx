import React from "react";

export default function OrderDetails() {
  return (
    <div>
      <p>
        You want to buy customized names. Please give us following additional
        information
      </p>
      <p>- which name(s) and where you want to have written:</p>
      <label htmlFor="names">name 1 </label>
      <input type="text" id="names" name="names" />
      <label htmlFor="location1">location 1</label>
      <select name="location1" id="location1"></select>
    </div>
  );
}
