import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebase.init";

const useBookings = (id) => {
    const [user] = useAuthState(auth);
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    
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
  return [bookings, setBookings];
};

export default useBookings;