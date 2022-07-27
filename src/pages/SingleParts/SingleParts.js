import React from "react";
import { Link } from 'react-router-dom';


const SingleParts = ({ part }) => {
  const {
    img,
    name,
    description,
    minimumOrderQuantity,
    availableQuantity,
    price,
  } = part;

  return (
    <div className="card mt-4  bg-green-300 shadow-xl">
      <figure className=" pt-4">
        <img src={img} alt="pic" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{name}</h2>
        <p>{description}</p>
        <p>
          {" "}
          <span className="fw-bold">Price per unit:</span> ${price}
        </p>
        <p>
          <span className="fw-bold">Minimum Order Quantity: </span>{" "}
          {minimumOrderQuantity}
        </p>
        <p>
          <span className="fw-bold">Available Quantity: </span>{" "}
          {availableQuantity}
        </p>
        <div className="card-actions">
          <button className="btn btn-primary"><Link to='/purchase'>Purchase  Now</Link> </button>
        </div>
      </div>
    </div>
  );
};

export default SingleParts;
