import React from 'react';
import { toast } from 'react-toastify';
import './Users.css';

const UserRow = ({user,index}) => {
    const {email,role} = user;
    const makeAdmin=()=>{
        fetch(`https://lit-crag-63587.herokuapp.com/user/admin/${email}`,{
            method:'PUT',
            headers:{
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res=>{
            if(res.status ===403){
                toast.error('Failed to make an admin')
            }
            return res.json()})
        .then(data=>{
            if(data.modifiedCount > 0){
                toast.success("successfully made an admin");
            }
            
        })

    }
    return (
        <tr>
        <td data-label='No.'><span>{index + 1}</span></td>
        <td data-label='Email'><span>{email}</span></td>
        <td data-label='Create Admin'><span>{
            role!=='admin' &&
            <button onClick={makeAdmin} className="btn btn-xs">Make Admin</button>}</span></td>
        <td data-label='Action'><span><button className="btn btn-xs">Remove User</button></span></td>
      </tr>
    );
};

export default UserRow;