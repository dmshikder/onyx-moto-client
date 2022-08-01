import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";


const MyProfile = () => {

  const [user] = useAuthState(auth);
    const [userInfo, setUserInfo] = useState([]);
  useEffect(()=>{
    
      fetch(`https://lit-crag-63587.herokuapp.com/user`)
  .then(res=>res.json())
  .then(data=>{
    const result = data.find(({email})=> email===user.email)
    setUserInfo(result)
    console.log(result)
  });
    
  
},[])

  

  
  const handleUpdateProfile = (event) => {
    event.preventDefault();
    const education = event.target.education.value;
    const location = event.target.location.value;
    const phone = event.target.phone.value;
    const linkedin = event.target.linkedin.value;

    const updateProfile = {education, location, phone, linkedin}

    fetch(`https://lit-crag-63587.herokuapp.com/users/${user.email}`,{
      method:'PUT',
      headers:{
        'content-type':'application/json',
        authorization: `Bearer ${localStorage.getItem('accessToken')}`
      },
      body: JSON.stringify(updateProfile)
    })
    .then(res=>res.json())
    .then(data=>{
      console.log('success', data);
      alert('user updated')
    })

  };
  return (
    <div>
      <div className="grid grid-cols-1 gap-3 justify-items-center mt-2 mb-10 pb-4 card  bg-base-100 shadow-xl">
        <h2 className="text-5xl pb-4">My Profile</h2>
        <p>Name: {user.displayName}</p>
        <p>Email: {user.email}</p>
        <p>Education: {userInfo.education}</p>
        <p>Location: {userInfo.location}</p>
        <p>Phone: {userInfo.phone}</p>
        <p>LinkedIn: {userInfo.linkedin}</p>
        
      </div>
      <div>
        <form
          onSubmit={handleUpdateProfile}
          className="grid grid-cols-1 gap-3 justify-items-center mt-2"
        >
          <input
            type="text"
            name="education"
            placeholder="Education"
            className="input input-bordered w-full max-w-xs"
            required
          />
          <input
            type="text"
            name="location"
            placeholder="Location"
            className="input input-bordered w-full max-w-xs"
            required
          />

          <input
            type="number"
            name="phone"
            placeholder="Phone Number"
            className="input input-bordered w-full max-w-xs"
            required
          />
          <input
            type="text"
            name="linkedin"
            placeholder="LinkedIn profile link"
            className="input input-bordered w-full max-w-xs"
            required
          />

          <input
            type="submit"
            value="Submit"
            className="btn btn-secondary w-full max-w-xs"
          />
        </form>
      </div>
    </div>
  );
};

export default MyProfile;
