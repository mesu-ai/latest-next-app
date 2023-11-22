'use server'

import Link from 'next/link';
import React from 'react';
import AllPost from './AllPost';



const page = () => {
  
  return (
    <div>
      
      <Link className='bg-red-300' href="/post/add">Add New Post</Link>
    
      <h1 className='my-auto text-center'>Post Page</h1>

      <AllPost/>
  

    </div>
  );
};

export default page;