import React, { useEffect } from 'react';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from '../../firebase.init';
import useToken from '../../hooks/useToken';
import Loading from '../Shared/Loading';

const Login = () => {
    const {
      register,
      formState: { errors },
      handleSubmit,
    } = useForm();
    const [signInWithGoogle, gUser,gLoading, gError] = useSignInWithGoogle(auth);
    const [
      signInWithEmailAndPassword,
      user,
      loading,
      error,
    ] = useSignInWithEmailAndPassword(auth);
  
    let signInError;
  
    const navigate = useNavigate();
    const [token] = useToken(user || gUser)
    const location = useLocation();
   let  from = location.state?.from?.pathname || '/';
   useEffect(()=>{
    if (token) {
      navigate(from,{replace:true});
    }
   },[token,from,navigate]);
  
    if(loading || gLoading){
      return <Loading/>
    }
    if(error || gError){
      signInError = <p className="text-red-500"><small>{error?.message || gError?.message}</small></p>
    }
  
    
    
    const onSubmit = (data) => {
      console.log(data);
      signInWithEmailAndPassword(data.email, data.password)
    };
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="card  bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="text-center text-2xl font-bold">Login</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
  
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Email</span>
                 
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="input input-bordered w-full max-w-xs"
                  {...register("email", {
                      required:{
                          value:true,
                          message: 'Email is required'
                      },
                      pattern: {
                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                        message: 'Provide a valid email'
                      }
                    })}
                />
                <label className="label">
                {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                  
                  
                </label>
              </div>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Password</span>
                 
                </label>
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="input input-bordered w-full max-w-xs"
                  {...register("password", {
                      required:{
                          value:true,
                          message: 'Password is required'
                      },
                      minLength: {
                        value: 6,
                        message: 'Must be 6 characters or longer'
                      }
                    })}
                />
                <label className="label">
                {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                  
                  
                </label>
              </div>
              {signInError}
             
              <input className="btn w-full max-w-xs" type="submit" value='Login' />
            </form>
            <p>New to Onyx Moto? <Link className="text-secondary" to='/signup'>Create New Account</Link></p>
            <div className="divider">OR</div>
            <button
              onClick={() => signInWithGoogle()}
              className="btn btn-outline" 
            >
             <img src="https://i.ibb.co/JttsWGr/google-logo-9808.png" alt="" className='w-6 mr-4'/> Continue with GOOGLE
            </button>
          </div>
        </div>
      </div>
    );
  };

export default Login;