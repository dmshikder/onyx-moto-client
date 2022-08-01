import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useParams } from "react-router-dom";
import Loading from "../Shared/Loading";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe('pk_test_51LRN44BIkrhZn2y1SfokfDEbGIVdsPkOlCEUJw4wxsBVzY8dvGydwhwAAAVXa37hWnD3nKfb1IBvArPQyp4FbCij00gkgVvQtA');

const Payment = () => {
  const { id } = useParams();
  const url = `https://lit-crag-63587.herokuapp.com/booking/${id}`;
  const { data: booking, isLoading } = useQuery(["booking", id], () =>
    fetch(url, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );
  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div>
      <div class="card w-50 max-w-md  bg-base-100 shadow-xl my-12">
        <div class="card-body">
          <p className="text-success font-bold"> Hello, {booking.name}</p>
          <h2 class="card-title">Please pay for: {booking.partsName}</h2>
          <p>Quantity: {booking.quantity} </p>
          <p>Total Price: ${booking.totalPrice} </p>
        </div>
      </div>
      <div class="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
        <div class="card-body">
        <Elements stripe={stripePromise}>
    <CheckoutForm  booking={booking}/>
  </Elements>
        </div>
      </div>
    </div>
  );
};

export default Payment;
