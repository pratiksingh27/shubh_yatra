import React from "react";
// import { useForm } from 'react-hook-form';
import { useState } from "react";
import { Link } from "react-router-dom";
import form from './assets/form.png'

export default function Registration() {
  // const { register, handleSubmit, errors } =useForm();
  // const [userInfo, setUserInfo]=useState();
  // const onSubmit = (data) => {
  //   setUserInfo(data);
  //   console.log(data);
  // };
const [user, setUser] = useState({
  name:"", email:"", phone:"", password:"", cpassword:""
});
  let name, value
  const handelInputs = (e) => {
      console.log(e);
      name = e.target.name;
      value = e.target.value;

      setUser({...user, [name]:value});
  }

  return (
    <>
    {/* <pre className="text-white">{JSON.stringify(userInfo, undefined, 4)}</pre> */}
      <div className="bg-white max-w-[1240px] mx-auto my-8 grid md:grid-cols-2">
        <div className="my-auto justify-center flex">
          <img className="grid align-middle mx-auto justify-center" src={form} alt="" />
        </div>
        <div>
          
          <form
          //  onSubmit={ handleSubmit(onSubmit)}
            className="lg:grid-cols-3 py-16 shadow-xl w-full px-8 md:mx-auto md:w-full rounded-lg">
            <h1 className="font-bold text-3xl md:2xl">Sign Up</h1>
            <div className="py-4">
              <input
                className="p-2 flex w- rounded-md text-black mr-2 md:w-full w-full"
                type="text"
                name="name"
                value={user.name}
                onChange={handelInputs}
                // ref={register()}
                placeholder="Enter your Name" required
              /><hr></hr>
            </div>
            <div className="py-4 form-group">
              <input
                className="p-2 flex w-50% rounded-md text-black mr-2 md:w-full w-full"
                type="email"
                name="email"
                value={user.email}
                onChange={handelInputs}
                //  ref={register()}
                placeholder="Enter Your Email" 
              /><hr></hr>
            </div>
            <div className="py-4 from-group">
              <input
                className="p-2 flex w- rounded-md text-black mr-2 md:w-full w-full"
                type="number"
                name="phone"
                value={user.phone}
                onChange={handelInputs} 
                // ref={register()}
                placeholder="Your Phone" 
              /><hr></hr>
            </div>
            <div className="py-4 form-group">
              <input
                className="p-2 flex w- rounded-md text-black mr-2 md:w-full w-full"
                type="password"
                name="password"
                value={user.password}
                onChange={handelInputs}
                //  ref={register()}
                placeholder="Your Password" 
              /><hr></hr>
            </div>
            <div className="py-4 form-group">
              <input
                className="p-2 flex w- rounded-md text-black mr-2 md:w-full w-full"
                type="password"
                name="cpassword"
                value={user.cpassword}
                onChange={handelInputs}
                //  ref={register()}
                placeholder="Confirm Your Password" 
              /><hr></hr>
            </div>

            <input
              className="bg-[#00df9a] w-[200px] rounded-md font-medium my-4 mx-auto py-1 text-black hover:opacity-70 hover:scale-105 duration-300"
              type="submit"
              value="Registre Now"
            />
            
          </form>
          {/* to redirect to log in  */}
          <p>If already have account than <button className="border-b border-blue-500 text-blue-500 "><Link to='/LogIn'>Sign-In</Link></button></p>
        </div>
      </div>
    </>
  );
}
