'use client';

import { signOut, getSession, } from 'next-auth/react';

const HomePage = async () => {

  const session = await getSession();

  if (session) {
    console.log({ session });
  }

  // const seeUserDetails = async () => {
    
  //   const res = await fetch('http://localhost:3000/api/auth/user', {
  //     method: 'GET',
  //     headers: {
  //       'Content-Type': 'application/json',
  //       Authorization: `Bearer ${session.accessToken}`,
  //     },
  //   });

  //   const data = await res.json();

  //   console.log({ data });
  // }

  return (
    <div className='text-center flex flex-col'>
      <p > Home page</p>
      {!!session && <button type='button' onClick={() => signOut()}>Sign Out</button>}

      {!!session && <button type='button' onClick={() => seeUserDetails}>See Details</button>}


    </div>
  );
}

export default HomePage;