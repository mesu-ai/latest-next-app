/* eslint-disable prettier/prettier */
import React from 'react'
import Error from './error';
import { Suspense } from 'react';
import Loading from './loading';

const page = async() => {
  const teams= await getData();

  if(!teams.length){
    throw new Error('Error');
  }

  return <div className="bg-white max-h-[20rem] overflow-y-scroll rounded-lg px-10">
  team analytics page
  <Suspense fallback={<Loading />}>
    <div className="space-y-3">
      {teams?.length &&
        teams?.map((item,index) => (
          <ul
            key={index}
            className="shadow-lg border border-gray-400 rounded-md p-5"
          >
            <li className='text-red-700'>{item?.id}</li>
            <li>{item?.title}</li>
          </ul>
        ))}
    </div>
  </Suspense>
</div>
}

export default page

async function getData() {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/`)
  if (!res.ok) {
  }
  return res.json()
}
