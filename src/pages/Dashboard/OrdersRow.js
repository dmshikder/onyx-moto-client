import React from "react";
import useBookings from "../../hooks/useBookings";

const OrdersRow = ({ booking, index }) => {
  const { email, name, partsName, quantity } = booking;

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
    <tr>
      <th>{index + 1}</th>
      <td>{email}</td>
      <td>{name}</td>
      <td>{partsName}</td>
      <td>{quantity}</td>
      <td>
        {booking.totalPrice && !booking.paid && (
          <p className="text-red-500 font-bold">Unpaid</p>
        )}
        {booking.totalPrice && booking.paid && (
          <p>
            <span className="text-green-500 font-bold">Pending</span>
          </p>
        )}
      </td>
      <td>
        {booking.totalPrice && !booking.paid && (
          <button
            onClick={() => handleDelete(booking._id)}
            className="btn btn-xs"
          >
            delete
          </button>
        )}

        {booking.totalPrice && booking.paid && (
          <p>
            <button className="btn btn-xs">shiped</button>
          </p>
        )}
      </td>
    </tr>
  );
};

export default OrdersRow;
