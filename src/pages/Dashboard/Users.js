import React, { useEffect, useState } from "react";
import UserRow from "./UserRow";
 
const Users = () => {
  
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/user",{
      method:'GET',
      headers:{
        authorization: `Bearer ${localStorage.getItem('accessToken')}`
    }
    })
      .then((res) => res.json())
      .then((data) => setUsers(data));
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
      users.map(user=><UserRow
      key={user._id}
      user={user}
      ></UserRow>)
    }
        
    </tbody>
  </table>
 
</div>
  );
};

export default Users;
