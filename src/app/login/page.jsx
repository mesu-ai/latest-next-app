'use client'

import React, { useState } from 'react';

const LoginPage = () => {
  const [state, setState] = useState([]);

  const handleBlur = (e) => {
    console.log(e.target.value)
    const { name, value } = e.target;
    console.log({ name, value });
    const newValue = { ...state };
    newValue[name] = value;
    setState(newValue)
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      console.log({state});
      // const res = await fetch("http://localhost:3000/api/topics", {
      //   method: "POST",
      //   headers: {
      //     "Content-type": "application/json",
      //   },
      //   body: JSON.stringify(state),
      // });

      // console.log({ res });

      // if (res.ok) {
      //   router.push("/");
      // } else {
      //   throw new Error("Failed to create a blog.");
      // }
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <div>
      <h3 className='text-center'>Login page</h3>

      <form className='mx-auto max-w-2xl bg-sky-400 flex flex-col px-10 py-12'
        onSubmit={(e) => handleSubmit(e)}>

        <label htmlFor="mobileNo">User Name</label>
        <input type="text" onBlur={(e) => handleBlur(e)} name="mobileNo" id="" />

        <label htmlFor="password">Password</label>
        <input type="password" onBlur={(e) => handleBlur(e)} name="password" id="" />


        <button className='bg-green-700 py-2 mt-5 text-white' type="submit">Submit</button>
      </form>
      
    </div>
  );
};

export default LoginPage;