import React from "react";
import "./checkout.css";
import { Container } from "./Container";
import { Filler } from "./Filler";

const Checkout = () => {
  const triggerText = "Pay Now";
  const onSubmit = (event) => {
    event.preventDefault(event);
    console.log(event.target.txid.value);
    console.log(event.target.amount.value);
    console.log(event.target.cnic.value);
    console.log(event.target.number.value);
  };
  return (
    <div className="App">
      <Container triggerText={triggerText} onSubmit={onSubmit} />
    </div>
  );
};

export default Checkout;
