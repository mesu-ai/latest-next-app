'use client';

import { signOut, getSession, } from 'next-auth/react';

const HomePage = async () => {
  const session = await getSession();

  if (session) {
    console.log({ session });
  }

  return (
    <div className='text-center flex flex-col'>
      <p > Home page</p>
      {!!session && <button type='button' onClick={() => signOut()}>Sign Out</button>}
    </div>
  );
}

export default HomePage;