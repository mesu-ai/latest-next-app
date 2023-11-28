'use server'

import React from 'react';
import { authOptions } from '../api/auth/[...nextauth]/route';
import AllPost from './AllPost';
import { getServerSession } from 'next-auth';
import LikeButton from './LikeButton';


const getPosts = async (accessToken) => {
 
  const res = await fetch('http://localhost:3000/api/post', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${accessToken}`
    },
  });

  const data = await res.json();
  return data.data;
}


const Posts = async () => {

  const session = await getServerSession(authOptions)
  const allPosts = await getPosts(session?.accessToken);

 
  return (
    <div>
      <h1>all post page</h1>
      <AllPost >
        <ul className="space-y-3  ">
          {allPosts && allPosts?.map((post) => (
            <li className="bg-white border border-slate-400 shadow-lg p-5" key={post._id}>
              <p>{post.title}</p>
              <p>{post.description}</p>

              <LikeButton postId={post._id} isLike={post?.likes?.includes(session?.user?.userId)} />
              <p>{post?.likes?.length}</p>
            </li>
          ))}
        </ul>

      </AllPost>



      {/* <ul className="space-y-3  ">
      {posts && posts?.map((post)=>(
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

export default Posts;