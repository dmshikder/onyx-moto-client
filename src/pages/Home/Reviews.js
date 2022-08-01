import React, { useEffect, useState } from 'react';
import SingleReview from './SingleReview';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
      fetch("https://lit-crag-63587.herokuapp.com/review")
        .then((res) => res.json())
        .then((data) => setReviews(data));
    }, []);
    return (
      <div className="container max-w-7xl mx-auto">
        <h1 className="text-xl text-center font-bold m-5">What our customer says </h1>
        <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-5">
          {reviews.map((r) => (
            <SingleReview key={r._id} sreview={r}></SingleReview>
          ))}
        </div>
      </div>
    );
  };

export default Reviews;