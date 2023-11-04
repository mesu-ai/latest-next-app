import React from 'react';

const SeeUserDetails = () => {

  const seeUserDetails = async () => {
    // /api/Customer/Get?customerId=18568
    try {
      const res = await fetch('/api/user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${session.accessToken}`,
      },
      body: JSON.stringify({
        customerId: 18568,
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
      <button type='button' onClick={() => seeUserDetails}>See Details</button>
      
    </div>
  );
};

export default SeeUserDetails;