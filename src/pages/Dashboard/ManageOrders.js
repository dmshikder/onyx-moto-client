import React, { useEffect, useState } from 'react';
import OrdersRow from './OrdersRow';

const ManageOrders = () => {
    const [bookings, setBookings] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/booking",{
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
        <th>Create Admin</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
   
    {
      bookings.map(booking=><OrdersRow
      key={booking._id}
      booking={booking}
      ></OrdersRow>)
    }
    </tbody>
  </table>
 
</div>
    );
};

export default ManageOrders;