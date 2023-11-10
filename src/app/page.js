'use client';

import SeeUserDetails from '@/components/organization/SeeUserDetails';
import { signOut, getSession, useSession, } from 'next-auth/react';


const HomePage = () => {


  // const session = await getSession();
  const {data: session, status}= useSession()

  // if (session) {
  //   console.log({ session });
  // }
  console.log({ session, status });

  
  return (
    <div className='text-center flex flex-col'>
      <p > Home page</p>

      {session?.user?.name ?
        <div>
          <button type='button' onClick={() => signOut()}>Sign Out</button>
          <SeeUserDetails />
        </div> : null}

    </div>
  );
}

export default HomePage;