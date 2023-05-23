/* eslint-disable prettier/prettier */

import React from 'react';

const page = async ({params}) => {

  const data = await getData(params);
  // console.log(data)

  // console.log({params})

  return (
    <div>
     <h1>{data?.title}</h1>
      
    </div>
  );
};

export default page;

async function getData(params) {
  console.log(params.slug)
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.slug}`);
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
//  console.log(res)
  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    // throw new Error('Failed to fetch data');
  }
 
  return res.json();
}
 







