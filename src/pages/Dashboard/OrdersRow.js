import React from "react";
import useBookings from "../../hooks/useBookings";
import './ManageOrders.css';

const OrdersRow = ({ booking, index }) => {
  const { email, name, partsName, quantity } = booking;

  const [bookings, setBookings] = useBookings([]);



  const handleUpdateStatus = (id) => {
  
    const status = 'approved'

    const updateStatus = {status}

    fetch(`https://lit-crag-63587.herokuapp.com/booking/${id}`,{
      method:'PUT',
      headers:{
        'content-type':'application/json',
        authorization: `Bearer ${localStorage.getItem('accessToken')}`
      },
      body: JSON.stringify(updateStatus)
    })
    .then(res=>res.json())
    .then(data=>{
      console.log('success', data);
      alert('status updated')
    })

  };









  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure?");
    if (proceed) {
      const url = `https://lit-crag-63587.herokuapp.com/booking/${id}`;
      fetch(url, {
        method: "DELETE",
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          const remaining = bookings.filter((part) => part._id !== id);
          console.log(remaining);
          setBookings(remaining);
        });
    }
  };

  return (
    <tr>
      <td data-label='No.'><span>{index + 1}</span></td>
      <td data-label='Email'><span>{email}</span></td>
      <td data-label='Name'><span>{name}</span></td>
      <td data-label='Parts Name'><span>{partsName}</span></td>
      <td data-label='Quantity'><span>{quantity}</span></td>
      <td data-label='Status'>
        <span>{booking.totalPrice && !booking.paid && (
          <p className="text-red-500 bg-fuchsia-300 rounded-md text-center p-1 font-bold">Unpaid</p>
        )}
        {
        booking.status? <p className="text-green-600 font-bold p-1 bg-yellow-300 rounded-md text-center"> shipped</p> :
        booking.totalPrice && booking.paid && (<p><span className=" font-bold bg-red-400 rounded-md p-1">Pending</span></p>   )}</span>
      </td>
      <td data-label='Action'>
        <span>{booking.totalPrice && !booking.paid && (
          <button
            onClick={() => handleDelete(booking._id)}
            className="btn btn-xs"
          >
            delete
          </button>
        )}

        {booking.totalPrice && booking.paid && !booking.status && (
          <p>
            <button onClick={() => handleUpdateStatus(booking._id)} className="btn btn-xs">Approve</button>
          </p>
        )}</span>
      </td>
    </tr>
  );
};

export default OrdersRow;
