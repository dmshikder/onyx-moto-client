import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const AddParts = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {
        console.log(data);
        const url = `http://localhost:5000/allparts`;
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
                toast("Parts Added");
              }
          });
        
    }
    return (
        <div className="w-50 mx-auto">
      <h2>please add product</h2>
      <form  className="grid grid-cols-1 gap-3 justify-items-center mt-2" onSubmit={handleSubmit(onSubmit)}>
        <input className="input input-bordered w-full max-w-xs" placeholder="name" {...register("name")} />
        <input className="input input-bordered w-full max-w-xs" type="number" placeholder="Minimum Order Quantity" {...register("minimumOrderQuantity")} />

        <textarea
          className="input input-bordered w-full max-w-xs"
          placeholder="description"
          {...register("description")}
        />

        <input
          className="input input-bordered w-full max-w-xs"
          placeholder="Available Quantity"
          {...register("availableQuantity")}
        />
       
        <input
          className="input input-bordered w-full max-w-xs"
          placeholder="price"
          type="number"
          {...register("price")}
        />
        <input className="input input-bordered w-full max-w-xs" placeholder="img url" {...register("img")} />

        <input className="btn btn-outline"  type="submit" value="Add parts" />
      </form>
    </div>
    );
};

export default AddParts;