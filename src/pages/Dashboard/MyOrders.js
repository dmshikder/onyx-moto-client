import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../firebase.init";

const MyOrders = () => {
  const [bookings, setBookings] = useState([]);
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (user) {
      fetch(`http://localhost:5000/booking?email=${user.email}`, {
        method: "GET",
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
        .then((res) => {
          if (res.status === 401 || res.status === 403) {
            signOut(auth);
            localStorage.removeItem("accessToken");
            navigate("/");
          }

          return res.json();
        })
        .then((data) => setBookings(data));
    }
  }, [user]);
  return (
    <div>
      <h2>Total Bookings : {bookings.length}</h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Parts Name</th>
              <th>Price Per Unit</th>
              <th>Quantity</th>
              <th>Total Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((part, index) => (
              <tr>
                <th>{index + 1}</th>
                <td>{part.partsName}</td>
                <td>$ {part.pricePerUnit}</td>
                <td>{part.quantity}</td>
                <td>{part.pricePerUnit * part.quantity}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrders;
