import React from "react";
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import auth from '../../firebase.init';

const AddReview = () => {
  const [user] = useAuthState(auth);
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    const url = `https://lit-crag-63587.herokuapp.com/review`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          toast("Review Added");
        }
      });
  };
  return (
    <div className="w-50 mx-auto">
      <h2 className="text-center pt-10 text-xl font-bold">Please add Review</h2>
      <form
        className="grid grid-cols-1 gap-3 justify-items-center mt-2"
        onSubmit={handleSubmit(onSubmit)}
      >
       
        
        <input
          className="input input-bordered w-full max-w-xs"
          value={user?.displayName || ""}
          {...register("name")}
        />
        <textarea
          className="input input-bordered w-full max-w-xs"
          placeholder="write review"
          {...register("review")}
        />

        <input
          className="input input-bordered w-full max-w-xs"
          placeholder="Ratings out of 5"
          {...register("ratings")}
        />

        <input className="btn btn-outline" type="submit" value="Add review" />
      </form>
    </div>
  );
};

export default AddReview;
