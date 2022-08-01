import React, { useEffect, useState } from 'react';
import SingleParts from '../SingleParts/SingleParts';

const AllParts = () => {
    const [parts, setParts] = useState([]);
    useEffect(() => {
      fetch("https://lit-crag-63587.herokuapp.com/allparts")
        .then((res) => res.json())
        .then((data) => setParts(data));
    }, []);
    return (
      <div className="container max-w-7xl mx-auto">
        <h1 className="text-xl text-center font-bold m-5">Motor Bike Parts </h1>
        <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-5 ml-4 mr-4 mb-4">
          {parts.map((part) => (
            <SingleParts key={part._id} part={part}></SingleParts>
          ))}
        </div>
      </div>
    );
  };

export default AllParts;