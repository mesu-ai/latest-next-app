'use client';

import Pagination from '@/components/atom/Pagination';
import SeeUserDetails from '@/components/organization/SeeUserDetails';
import { signOut, getSession, useSession, } from 'next-auth/react';


const HomePage = () => {


  // const session = await getSession();
  const { data: session, status } = useSession()

  // if (session) {
  //   console.log({ session });
  // }
  console.log({ session, status });


  return (
    <div className='text-center flex flex-col'>
      <p > Home page</p>

      {session?.user?.name ?
        <div>
          <h2 className='font-bold text-xl capitalize'>Welcome {session.user.name}</h2>
          <SeeUserDetails />

          <button className='my-5 bg-red-500 text-white px-5 rounded-xl py-2' type='button' onClick={() => signOut()}>Sign Out</button>

        </div> : null}

      <div className='my-8'>
        <Pagination />

      </div>


    </div>
  );
}

export default HomePage;