import React from 'react';
import useParts from '../../hooks/useParts';

const ManageParts = () => {
    const [parts, setParts] = useParts([]);

    const handleDelete = (id) => {
      const proceed = window.confirm("Are you sure?");
      if (proceed) {
        const url = `https://lit-crag-63587.herokuapp.com/allparts/${id}`;
        fetch(url, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            const remaining = parts.filter((part) => part._id !== id);
            setParts(remaining);
          });
      }
    };

   
    return (
      <div className="container max-w-7xl mx-auto">
        <h1 className="text-xl text-center font-bold m-5">All Parts </h1>
        <div className=" grid sm:grid-cols-1 lg:grid-cols-3 gap-5 ml-4 mr-4">
          {parts.map((part) => (
           <div className='card bg-green-300 shadow-xl p-5 '>
            <img className='rounded-lg' src={part.img} alt="" />
             <p><span className='font-bold'>Parts Name:</span> {part.name}</p>
            <p className='pb-4'><span className='font-bold'>Available Quantity:</span> {part.availableQuantity}</p>
            <button onClick={() => handleDelete(part._id)} className="btn btn-xs " >delete</button>
           </div>
            
          ))}
         
        </div>
      </div>
    );
  };
export default ManageParts;