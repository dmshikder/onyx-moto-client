import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

const MyOrders = () => {
  const [user] = useAuthState(auth);
  const [bookings, setBookings] = useState([]);

  useEffect(()=>{
    
      if(user){
        fetch(`http://localhost:5000/booking?email=${user.email}`,{
        method:'GET',
        headers:{
          authorization: `Bearer ${localStorage.getItem('accessToken')}`
      }
      })
    .then(res=>res.json())
    .then(data=>setBookings(data));
      }
    
  },[user])
  return (
    <div>
      <h2>hi: {bookings.length}</h2>
      <div class="overflow-x-auto">
  <table class="table w-full">
    
    <thead>
      <tr>
        <th></th>
        <th>Parts Name</th>
        <th>Price Per Unit</th>
        <th>Quantity</th>
        <th>Total Price</th>
        <th>Payment</th>
      </tr>
    </thead>
    <tbody>
      {
        bookings.map((a,index)=><tr key={a._id}>
          <th>{index + 1}</th>
          <td>{a.partsName}</td>
          <td>{a.pricePerUnit}</td>
          <td>{a.quantity}</td>
          <td>{a.totalPrice}</td>
          <td>
            {(a.totalPrice && !a.paid) && <Link to={`/dashboard/payment/${a._id}`}> <button className='btn btn-xs btn-success'>Pay</button></Link>}
            {(a.totalPrice && a.paid) &&  <div>
              <p><span className='text-success'>Paid</span></p>
              <p>Transaction id: <span className='text-success'>{a.transactionId}</span></p>
            </div> }
            </td>
          
        </tr>)
      }
     
      
     
    </tbody>
  </table>
</div>
      
    </div>
  );
};

export default MyOrders;