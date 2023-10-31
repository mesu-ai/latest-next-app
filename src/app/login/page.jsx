// 'use client'

import React, { useState } from 'react';
import LoginForm from './LoginForm';
// import { signIn } from "next-auth/react"

const LoginPage = () => {
  // const [state, setState] = useState([]);

  // const handleBlur = (e) => {
  //   console.log(e.target.value)
  //   const { name, value } = e.target;
  //   console.log({ name, value });
  //   const newValue = { ...state };
  //   newValue[name] = value;
  //   setState(newValue);
  // }

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   try {
  //     console.log({ state });
  //     const res = await signIn('credentials', {
  //       redirect: false,
  //       mobileNo: state?.mobileNo,
  //       password: state?.password,
  //       // callbackUrl: `${window.location.origin}`,
  //     });
  //     console.log({ res });

  //   } catch (error) {
  //     console.log(error);
  //   }
  // };


  return (
    <div>
      <h3 className='text-center'>Login page</h3>
      <LoginForm/>

      {/* <form className='mx-auto max-w-2xl bg-sky-400 flex flex-col px-10 py-12'
        onSubmit={(e) => handleSubmit(e)}>

        <label htmlFor="mobileNo">User Name</label>
        <input type="text" onBlur={(e) => handleBlur(e)} name="mobileNo" id="" />

        <label htmlFor="password">Password</label>
        <input type="password" onBlur={(e) => handleBlur(e)} name="password" id="" />


        <button className='bg-green-700 py-2 mt-5 text-white' type="submit">Submit</button>
      </form> */}

    </div>
  );
};

export default LoginPage;