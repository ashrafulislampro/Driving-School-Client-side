import React, { useState } from "react";
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import SimpleCardForm from "./SimpleCardForm";
import CheckoutPayment from './CheckoutPayment';


const ProcessPayment = ({newCourseData}) => {

const [stripePromise] = useState(() => loadStripe('pk_test_51K5kEtAdRZ9BdaicbTbKEhDLKgBNzKsSlbCIZqENaBnbl94vfRYQwvx6K0FxuOmR5qzPx7WlIJC3OrMo5K47D9sp00oP2stFFd'));


  return (
    <Elements stripe={stripePromise}>
      {/* <SimpleCardForm/> */}
      <CheckoutPayment course={newCourseData}></CheckoutPayment>
    </Elements>
  );
};

export default ProcessPayment;
