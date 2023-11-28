'use client'

import { baseURL } from '@/APIs/config/baseURL';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import React from 'react';

const LikeButton = ({ postId, isLike }) => {
  const { data: session } = useSession();
  const router = useRouter();

 

  const handleLike = async (id) => {
    console.log(id);

    const res = await fetch(`${baseURL}/api/post/${id}/like`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${session?.accessToken}`
      },
      body: JSON.stringify({postId:id}),
    });

    const data = await res?.json();
    if(res?.ok){
      console.log(data);
      router.push('/post');
     
    }
   

  }

  return (
    <button onClick={() => handleLike(postId)}
      className="my-3 px-4 py-1.5 bg-blue-500 text-white rounded-full ring-2 hover:ring-4 ring-blue-800 ring-inset" type="button">{isLike ? 'UnLike' : 'Like'}</button>
  );
};

export default LikeButton;