import React from 'react';
import { toast } from 'react-toastify';

const OrdersRow = ({booking}) => {
    const {email,name,partsName,quantity} = booking;
    const makeAdmin=()=>{
        fetch(`http://localhost:5000/user/admin/${email}`,{
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
        <th>1</th>
        <td>{email}</td>
        <td>{name}</td>
        <td>{partsName}</td>
        <td>{quantity}</td>
        
        
      </tr>
    );
};

export default OrdersRow;