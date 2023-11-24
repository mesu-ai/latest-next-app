
import { getServerSession } from "next-auth/next"

import React from 'react';
import { authOptions } from '../api/auth/[...nextauth]/route';


const getPosts= async(accessToken)=>{
  const res = await fetch('http://localhost:3000/api/post', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization':`Bearer ${accessToken}`
    },
  });
 
  const data = await res.json();
  return data.data;

}

const AllPost = async () => {

  const session = await getServerSession(authOptions)
  const allPosts = await getPosts(session?.accessToken);

  
  const handleLike = async (id)=>{
   
    console.log(id);

  }


  return (
    <div>
      <h1>all post page</h1>
      <ul className="space-y-3  ">
        {allPosts && allPosts?.map((post)=>(
          <li className="bg-white border border-slate-400 shadow-lg p-5" key={post._id}>
            <p>{post.title}</p>
            <p>{post.description}</p>

            <button onClick={()=>handleLike(post._id)} className="my-3 px-4 py-1.5 bg-blue-500 text-white rounded-full ring-2 hover:ring-4 ring-blue-800 ring-inset" type="button">Like</button>
            <p>{post?.likes?.length}</p>
          </li>
        ))}
      </ul>
      
    </div>
  );
};

export default AllPost;