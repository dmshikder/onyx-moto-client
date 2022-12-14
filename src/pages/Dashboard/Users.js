import React, { useEffect, useState } from "react";
import UserRow from "./UserRow";
import './Users.css';
 
const Users = () => {
   
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://lit-crag-63587.herokuapp.com/user",{
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
        <th>No.</th>
        <th>Email</th>
        <th>Create Admin</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
    {
      users.map((user, index)=><UserRow
      key={user._id}
      user={user}
      index={index}
      ></UserRow>)
    }
        
    </tbody>
  </table>
 
</div>
  );
};

export default Users;
