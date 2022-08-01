import React from "react";
import { Link } from "react-router-dom";
import useBookings from "../../hooks/useBookings";

const MyOrders = () => {
  const [bookings, setBookings] = useBookings([]);

  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure?");
    if (proceed) {
      const url = `http://localhost:5000/booking/${id}`;
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
              <th></th>
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
                <th>{index + 1}</th>
                <td>{a.partsName}</td>
                <td>{a.pricePerUnit}</td>
                <td>{a.quantity}</td>
                <td>{a.totalPrice}</td>
                <td>
                  {a.totalPrice && !a.paid && (
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
                  )}
                </td>
                <td>
                  {a.totalPrice && !a.paid && (
                    <button
                      onClick={() => handleDelete(a._id)}
                      className="btn btn-xs"
                    >
                      delete
                    </button>
                  )}
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
