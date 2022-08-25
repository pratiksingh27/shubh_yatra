import React, { useRef } from "react";
import { useForm } from 'react-hook-form';
import { useState } from "react";
import { Link } from "react-router-dom";
import form from './assets/form.png'

export default function Registration() {

  const {
    register,
    formState: { errors },
    handleSubmit, watch
  } = useForm({
    mode: "onBlur",
  });

  const password = useRef({});
  password.current = watch("password", "");
  const [userInfo, setUserInfo]=useState();
  const onSubmit = (data) => {
    setUserInfo(data);
    console.log(data);
  };

const [user, setUser] = useState({
  name:"", email:"", phone:"", password:"", cpassword:""
});

  let name, value;
  const handelInputs = (e) => {
      console.log(e);
      name = e.target.name;
      value = e.target.value;

      setUser({...user, [name]:value});
  }
  
//   const handleClick =() =>{
    
//     alert("Registration Completed")
//     window.location.reload(true);
  
// }

  return (
    <>
    <pre className="text-white text-center">{JSON.stringify(userInfo, undefined, 2)}
    </pre>
      <div className="bg-white max-w-[1240px] mx-auto my-8 grid md:grid-cols-2 md:rounded-lg">
        <div className="my-auto justify-center flex">
          <img className="grid align-middle mx-auto justify-center" src={form} alt="" />
        </div>
        <div>
          
          <form
           onSubmit={ handleSubmit(onSubmit)}
            className="lg:grid-cols-3 py-16 shadow-xl w-full px-8 md:mx-auto md:w-full rounded-lg">
            <h1 className="font-bold text-3xl md:2xl">Sign Up</h1>
            <div className="py-4">
              <input
                className="p-2 flex w- rounded-md text-black mr-2 md:w-full w-full"
                type="text"
                name="name"
                value={user.name}
                {...register( 'name', { required: true })}
                onChange={handelInputs}
                placeholder="Enter your Name" autoComplete="false"
              />
              <hr></hr>
              {errors.name && <p className="text-red-400 mt-1">Username is required</p>}
            </div>
            <div className="py-4 form-group">
              <input
                className="p-2 flex w-50% rounded-md text-black mr-2 md:w-full w-full"
                type="text"
                name="email"
                value={user.email}
                {...register("email", { required: true, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{3,4}$/i })}
                onChange={handelInputs}
                placeholder="Enter Your Email"
              /><hr></hr>
              {errors.email && <p className="text-red-400 mt-1">Email is invalid</p>}
            </div>
            <div className="py-4 from-group">
              <input
                className="p-2 flex w- rounded-md text-black mr-2 md:w-full w-full"
                type="number"
                name="phone"
                value={user.phone}
                {...register("phone", {required: true, pattern: /^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[6789]\d{9}$/ })}
                onChange={handelInputs} 
                placeholder="Your Phone" autoComplete="false"
              /><hr></hr>
              {errors.phone && <p className="text-red-400 mt-1">Number is invalid</p>}
            </div>
            <div className="py-4 form-group">
              <input
                className="p-2 flex w- rounded-md text-black mr-2 md:w-full w-full"
                type="password"
                name="password"
                value={user.password}
                {...register("password", { required: true, pattern: /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,99}$/ })}
                onChange={handelInputs}
                placeholder="Your Password" autoComplete="false"
              /><hr></hr>
              {errors.password && <p className="text-red-400 mt-1">Password should contane min. 6 words, Capital Letter, Small Letter , Number and Symbol</p>}
            </div>
            <div className="py-4 form-group">
              <input
                className="p-2 flex w- rounded-md text-black mr-2 md:w-full w-full"
                type="password"
                name="cpassword"
                value={user.cpassword}
                {...register("cpassword", { required: true, validate: value => value===password.current })}
                onChange={handelInputs}
                placeholder="Confirm Your Password" autoComplete="false"
              /><hr></hr>
              {errors.cpassword && <p className="text-red-400 mt-1">Confirm your password</p>}
            </div>

            <input
              className="bg-[#B00E15] w-[200px] rounded-md font-medium my-4 mx-auto py-1 text-white hover:opacity-70 hover:scale-105 duration-300"
              type="submit"
              value="Registre Now"
              // onClick={handleClick}
            />
            
          </form>
          {/* to redirect to log in  */}
          <p>If already have account than <button className="border-b border-blue-500 text-blue-500 "><Link to='/LogIn'>Sign-In</Link></button></p>
        </div>
      </div>
    </>
  );
}
