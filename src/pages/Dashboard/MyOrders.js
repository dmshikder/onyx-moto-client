import React from "react";
import { Link } from "react-router-dom";
import useBookings from "../../hooks/useBookings";
import './MyOrders.css';

const MyOrders = () => {
  const [bookings, setBookings] = useBookings([]);

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
    <div>
      <div class="overflow-x-auto">
        <table class="table w-full">
          <thead>
            <tr>
              <th>No.</th>
              <th>Parts Name</th>
              <th>Price Per Unit</th>
              <th>Quantity</th>
              <th>Total Price</th>
              <th>Payment</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((a, index) => (
              <tr key={a._id}>
                <td data-label='No.'><span>{index + 1}</span></td>
                <td data-label='Parts Name'><span>{a.partsName}</span></td>
                <td data-label='Price Per Unit'><span>{a.pricePerUnit}</span></td>
                <td data-label='Quantity'><span>{a.quantity}</span></td>
                <td data-label='Total Price'><span>{a.totalPrice}</span></td>
                <td data-label='Action'>
                  <span>{a.totalPrice && !a.paid && (
                    <Link to={`/dashboard/payment/${a._id}`}>
                      {" "}
                      <button className="btn btn-xs btn-success">Pay</button>
                    </Link>
                  )}
                  {a.totalPrice && a.paid && (
                    <div>
                      <p>
                        <span className="text-success">Paid</span>
                      </p>
                      <p>
                        Transaction id:{" "}
                        <span className="text-success">{a.transactionId}</span>
                      </p>
                    </div>
                  )}</span>
                </td>
                <td>
                  <span>{a.totalPrice && !a.paid && (
                    <button
                      onClick={() => handleDelete(a._id)}
                      className="btn btn-xs"
                    >
                      delete
                    </button>
                  )}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrders;
