import React, { useEffect, useState } from 'react';

const ManageParts = () => {
    const [parts, setParts] = useState([]);
    const [updatedParts, setUpdatedParts] = useState([]);
    useEffect(() => {
      fetch("http://localhost:5000/allparts")
        .then((res) => res.json())
        .then((data) => setParts(data));
    }, []);

   
    return (
      <div className="container max-w-7xl mx-auto">
        <h1 className="text-xl text-center font-bold m-5">All Parts </h1>
        <div className=" grid grid-cols-3 gap-10">
          {parts.map((part) => (
           <div className='card bg-green-300 shadow-xl p-5 '>
            <img className='rounded-lg' src={part.img} alt="" />
             <p><span className='font-bold'>Parts Name:</span> {part.name}</p>
            <p className='pb-4'><span className='font-bold'>Available Quantity:</span> {part.availableQuantity}</p>
            <button className="btn btn-xs" >delete</button>
           </div>
            
          ))}
         
        </div>
      </div>
    );
  };
export default ManageParts;