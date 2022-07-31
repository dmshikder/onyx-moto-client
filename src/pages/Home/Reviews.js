import React, { useEffect, useState } from 'react';
import SingleReview from './SingleReview';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
      fetch("http://localhost:5000/review")
        .then((res) => res.json())
        .then((data) => setReviews(data));
    }, []);
    return (
      <div className="container max-w-7xl mx-auto">
        <h1 className="text-xl text-center font-bold m-5">Motor Bike Parts </h1>
        <div className="grid grid-cols-3 gap-10">
          {reviews.map((r) => (
            <SingleReview key={r._id} sreview={r}></SingleReview>
          ))}
        </div>
      </div>
    );
  };

export default Reviews;