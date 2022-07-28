import React from "react";
import { useNavigate } from 'react-router-dom';


const SingleParts = ({ part }) => {
  const navigate = useNavigate();
  const navigateToPurchase = id =>{
    navigate(`/purchaseintent/${id}`)
      
}
  const {
    _id,
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
          <button onClick={()=>navigateToPurchase(_id)} className="btn btn-primary">Purchase  Now </button>
        </div>
      </div>
    </div>
  );
};

export default SingleParts;
