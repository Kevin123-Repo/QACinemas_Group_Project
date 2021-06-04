import React from "react";
import { CardElement } from "@stripe/react-stripe-js";

function CardSection() {
  return (
    <label>
      Enter Card details
      <CardElement />
    </label>
  );
}

export default CardSection;