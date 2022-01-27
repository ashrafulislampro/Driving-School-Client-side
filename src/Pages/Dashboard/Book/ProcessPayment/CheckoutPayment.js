import React from "react";
import axios from "axios";
import { toast } from "react-toastify";
import StripeCheckout from "react-stripe-checkout";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
const CheckoutPayment = ({course}) => {
  toast.configure();
  
  const handleToken = async (token) => {
    const response = await axios.post("https://gentle-gorge-81848.herokuapp.com/checkout", {
      token,
      course,
    });
    console.log(response.status);
    if (response.status === 200) {
      toast("Success! check email for details", { type: "success" });
    } else {
      toast("Something went wrong", { type: "error" });
    }
  };
  return (
    <div>
      <StripeCheckout
        stripeKey="pk_test_51K5kEtAdRZ9BdaicbTbKEhDLKgBNzKsSlbCIZqENaBnbl94vfRYQwvx6K0FxuOmR5qzPx7WlIJC3OrMo5K47D9sp00oP2stFFd"
        token={handleToken}
        amount={course?.price * 100}
        name={course?.title}
        billingAddress
        shippingAddress
      />
    </div>
  );
};

export default CheckoutPayment;
