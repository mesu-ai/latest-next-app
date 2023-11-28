
import Link from 'next/link';
import React from 'react';
import Posts from './Posts';
import PostsData from './PostsData';



const page = () => {
  
  return (
    <div>
      
      <Link className='bg-red-300' href="/post/add">Add New Post</Link>
    
      <h1 className='my-auto text-center'>Post Page</h1>
      <PostsData/>
      {/* <Posts/> */}

    </div>
  );
};

export default page;