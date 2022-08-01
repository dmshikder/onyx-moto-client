import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Booking from "./Booking";

const PurchaseIntent = () => {
  const { id, name } = useParams();
  const [parts, setParts] = useState({});

  useEffect(() => {
    const url = `https://lit-crag-63587.herokuapp.com/allparts/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setParts(data));
  }, []);

  return (
    <div>
        <div className="card mt-4  bg-green-300 shadow-xl">
      <figure className=" pt-4">
        <img src={parts.img} alt="pic" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">Name: {parts.name}</h2>
        <p>Description: {parts.description}</p>
        <p>
          
          <span className="fw-bold">Price per unit:</span> ${parts.price}
        </p>
        <p>
          <span className="fw-bold">Minimum Order Quantity: </span>
          {parts.minimumOrderQuantity}
        </p>
        <p>
          <span className="fw-bold">Available Quantity: </span>
          {parts.availableQuantity}
        </p>
      
      </div>
      
    </div>
    <Booking/>
    </div>
    
  );
};

export default PurchaseIntent;
