import { api } from '@/APIs/config/axiosInterceptor';
import React from 'react';

const SeeUserDetails = () => {

  const seeUserDetails = async () => {
    // /api/Customer/Get?customerId=18568
    try {
      console.log('clicked');
      const res = await fetch('http://localhost:3000/api/user', {
        method:'POST',
        headers: {
          "Content-type": "application/json",
        },
      // const res = await api.get('/Customer/Get', {params: {customerId: 18568},
      body: JSON.stringify({
        customerId: 18568
      }),
    });

    if(res){
      const data = await res.json();
      console.log({ data });

    }
      
    } catch (error) {
      console.log(error)
      
    }

    
  }

  return (
    <div>
      <button type='button' className='bg-red-500' onClick={() => seeUserDetails()}>See Details</button>
      
    </div>
  );
};

export default SeeUserDetails;