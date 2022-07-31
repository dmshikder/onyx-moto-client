import React from "react";

const SingleReview = ({ sreview }) => {
  const { review, ratings,  name } = sreview;
  return (
    <div class="card  bg-base-300 shadow-xl mb-4">
      <div class="card-body">
      <p><span className="font-bold">Name: </span>{name}</p>
        <p>{review}</p>
        <p><span className="font-bold">Ratings out of 5:</span> {ratings}</p>
        
      </div>
    </div>
  );
};

export default SingleReview;
