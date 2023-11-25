'use client'

// import { getServerSession } from "next-auth/next"

import React from 'react';
// import { authOptions } from '../api/auth/[...nextauth]/route';
// import LikeButton from "./LikeButton";
// import Posts from "./Posts";


// const getPosts= async(accessToken)=>{
//   'use server';
//   const res = await fetch('http://localhost:3000/api/post', {
//     method: 'GET',
//     headers: {
//       'Content-Type': 'application/json',
//       'Authorization':`Bearer ${accessToken}`
//     },
//   });
 
//   const data = await res.json();
//   return data.data;

// }

const AllPost =  ({children, handleLike}) => {

  // const session = await getServerSession(authOptions)
  // const allPosts = await getPosts(session?.accessToken);

  


  return (
    <div>
      <h1>all post page</h1>
      <button onClick={()=>handleLike(1)}> hello</button>

      {children}



      {/* <Posts posts={allPosts} handleLike={handleLike} /> */}
      {/* <ul className="space-y-3  ">
        {allPosts && allPosts?.map((post)=>(
          <li className="bg-white border border-slate-400 shadow-lg p-5" key={post._id}>
            <p>{post.title}</p>
            <p>{post.description}</p>

            <LikeButton postId={post._id} handleLike={handleLike} />
            <p>{post?.likes?.length}</p>
          </li>
        ))}
      </ul> */}
      
    </div>
  );
};

export default AllPost;