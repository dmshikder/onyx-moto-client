import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useParams } from "react-router-dom";
import Loading from "../Shared/Loading";

const Payment = () => {
  const { id } = useParams();
  const url = `http://localhost:5000/booking/${id}`;
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
        <div class="card-body"></div>
      </div>
    </div>
  );
};

export default Payment;
