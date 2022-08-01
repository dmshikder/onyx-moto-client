import React, { useEffect, useState } from 'react';
import './ManageOrders.css';
import OrdersRow from './OrdersRow';

const ManageOrders = () => {
    const [bookings, setBookings] = useState([]);
  useEffect(() => {
    fetch("https://lit-crag-63587.herokuapp.com/bookings",{
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
  <table className="table w-full ">
   
    <thead>
      <tr>
        <th>No.</th>
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