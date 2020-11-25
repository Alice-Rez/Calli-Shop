import React, { useState } from "react";

export default function OrderPersonal(props) {
  const [warning, setWarning] = useState(false);
  const submitOrderPersonal = (e) => {
    e.preventDefault();

    if (e.target.checkValidity()) {
      setWarning(false);
      props.setPage(2);
    } else {
      setWarning(true);
    }
  };
  return (
    <form id="orderPersonal" onSubmit={submitOrderPersonal}>
      <p>Here will be form with personal data</p>
    </form>
  );
}
