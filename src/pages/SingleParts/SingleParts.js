import React from "react";

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
    <div class="card mt-4  bg-green-300 shadow-xl">
      <figure class=" pt-4">
        <img src={img} alt="pic" class="rounded-xl" />
      </figure>
      <div class="card-body items-center text-center">
        <h2 class="card-title">{name}</h2>
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
        <div class="card-actions">
          <button class="btn btn-primary">Purchase  Now</button>
        </div>
      </div>
    </div>
  );
};

export default SingleParts;
