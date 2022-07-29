import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useParams } from "react-router-dom";
import auth from "../../firebase.init";

const MyProfile = () => {
    
    const { id} = useParams();
    
  const [user] = useAuthState(auth);
  const [parts, setParts] = useState({});

  useEffect(() => {
    const url = `http://localhost:5000/allparts/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setParts(data));
  }, []);

  const handleBooking = (event) => {
    event.preventDefault();
   

    const booking = {
     
      partsName: parts.name,
      pricePerUnit:parts.price,
      address: event.target.address.value,
      phone: event.target.phone.value,
      quantity: event.target.quantity.value,
    };

    fetch("http://localhost:5000/booking", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };
  return (
    <div>
      <div>
        <h2 className="text-5xl pb-4">My Profile</h2>
        <h2>Name: {user.displayName}</h2>
        <h2>Email: {user.email}</h2>
      </div>
      <div>
      <form
        onSubmit={handleBooking}
        className="grid grid-cols-1 gap-3 justify-items-center mt-2"
      >
        
        
          <input
          type="text"
          name="education"
          placeholder="Education"
          className="input input-bordered w-full max-w-xs"
          required
        />
         <input
          type="number"
          name="price"
          placeholder="Education"
          className="input input-bordered w-full max-w-xs"
          required
        />
      
        <input
          type="number"
          name="phone"
          placeholder="Phone Number"
          className="input input-bordered w-full max-w-xs"
          required
        />
        <input
          type="text"
          name="address"
          placeholder="Address"
          className="input input-bordered w-full max-w-xs"
          required
        />
        <input
          type="number"
          name="quantity"
          placeholder="Quantity"
          className="input input-bordered w-full max-w-xs"
          required
        />
       
        <input
          type="submit"
          value="Submit"
          className="btn btn-secondary w-full max-w-xs"
        />
      </form>
      
    </div>
    </div>
  );
};

export default MyProfile;
