import React, { useEffect, useState } from 'react';
import SingleParts from '../SingleParts/SingleParts';

const MotoParts = () => {
    const [parts, setParts] = useState([]);
    useEffect(() => {
      fetch("fakedata.json")
        .then((res) => res.json())
        .then((data) => setParts(data));
    }, []);
    return (
      <div className="container max-w-7xl mx-auto">
        <h1 className="text-xl text-center font-bold m-5">Motor Bike Parts </h1>
        <div className='grid grid-cols-3 gap-10' >
          {parts.map((part) => (
            <SingleParts key={part._id} part={part}></SingleParts>
          ))}
        </div>
        
      </div>
    );
  };

export default MotoParts;