import React, { useEffect, useState } from 'react';
import OrdersRow from './OrdersRow';

const ManageOrders = () => {
    const [bookings, setBookings] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/bookings",{
      method:'GET',
      headers:{
        authorization: `Bearer ${localStorage.getItem('accessToken')}`
    }
    })
      .then((res) => res.json())
      .then((data) => setBookings(data));
  }, []);
    return (
        <div className="overflow-x-auto">
  <table className="table w-full">
   
    <thead>
      <tr>
        <th></th>
        <th>Email</th>
        <th>Name</th>
        <th>Parts Name</th>
        <th>Quantity</th>
        <th>Status</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody> 
    {
      bookings.map((booking,index)=><OrdersRow
      key={booking._id}
      booking={booking}
      index={index}
      ></OrdersRow>)
    }
    </tbody>
  </table>
 
</div>
    );
};

export default ManageOrders;