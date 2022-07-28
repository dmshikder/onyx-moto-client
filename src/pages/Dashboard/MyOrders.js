import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyOrders = () => {
    const [bookings, setBookings] = useState([]);
    const [user] = useAuthState(auth)
    useEffect(()=>{
        if(user){
            fetch(`http://localhost:5000/booking?email=${user.email}`)
        .then(res=>res.json())
        .then(data=>setBookings(data));
        }
    },[user])
    return (
        <div>
            <h2>this is my order page : {bookings.length}</h2>
            <div class="overflow-x-auto">
  <table class="table w-full">
   
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
      </tr>
    </thead>
    <tbody>
        {
            bookings.map(part=><tr>
                <th>1</th>
                <td>{part.name}</td>
                <td>{part.phone}</td>
                <td>Blue</td>
              </tr>)
        }
      
      
     
    </tbody>
  </table>
</div>
        </div>
    );
};

export default MyOrders;