import React, { useEffect, useState } from "react";
import SingleParts from "../SingleParts/SingleParts";

const MotoParts = () => {
  const [parts, setParts] = useState([]);
  useEffect(() => {
    fetch("https://lit-crag-63587.herokuapp.com/allparts")
      .then((res) => res.json())
      .then((data) => {
        const newData = data.splice(0,6)
        setParts(newData)
      });
  }, []);
  return (
    <div className="container max-w-7xl mx-auto">
      <h1 className="text-xl text-center font-bold m-5">Motor Bike Parts </h1>
      <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-10 ml-3 mr-3">
        {parts.map((part) => (
          <SingleParts key={part._id} part={part}></SingleParts>
        ))}
      </div>
    </div>
  );
};

export default MotoParts;
