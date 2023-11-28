'use client'



import { baseURL } from '@/APIs/config/baseURL';
import { useSession } from 'next-auth/react';
import React from 'react';
import { useQuery } from 'react-query';
import LikeButton from './LikeButton';




const getPosts = async (accessToken) => {
  console.log({ accessToken });

  if(!accessToken){
    return [];
  }

  const res = await fetch(`${baseURL}/api/post`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${accessToken}`
    },
  });

  const data = await res.json();
  return data.data;

}

const PostsData = () => {
  const { data: session } = useSession();

  const { data: posts, isLoading } = useQuery('posts', () => getPosts(session?.accessToken),{
    enabled: !!session?.accessToken })
  console.log({ posts });

  // const session = await getServerSession(authOptions)
  // const allPosts = await getPosts(session?.accessToken);




  return (
    <div>
      <h1>all post page</h1>

      {isLoading ?
        <h1>Loading...</h1> :
        <ul className="space-y-3  ">
          {posts && posts?.map((post) => (
            <li className="bg-white border border-slate-400 shadow-lg p-5" key={post._id}>
              <p>{post.title}</p>
              <p>{post.description}</p>

              <LikeButton postId={post._id} isLike={post?.likes?.includes(session?.user?.userId)} />
              <p>{post?.likes?.length}</p>
            </li>
          ))}
        </ul>
      }

    </div>
  );
};

export default PostsData;