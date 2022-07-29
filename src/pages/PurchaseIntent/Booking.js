import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useParams } from "react-router-dom";
import auth from "../../firebase.init";

const Booking = () => {
    const { id, name } = useParams();
    
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
      name: user.displayName,
      email: user.email,
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
      <form
        onSubmit={handleBooking}
        className="grid grid-cols-1 gap-3 justify-items-center mt-2"
      >
        <input
          type="text"
          name="name"
          disabled
          value={user?.displayName || ""}
          className="input input-bordered w-full max-w-xs"
        />
        <input
          type="email"
          name="email"
          disabled
          value={user?.email || ""}
          className="input input-bordered w-full max-w-xs"
        />
          <input
          type="text"
          name="partsName"
          value={parts.name} disabled
          className="input input-bordered w-full max-w-xs"
          required
        />
         <input
          type="number"
          name="price"
          value={parts.price} disabled
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
  );
};

export default Booking;
