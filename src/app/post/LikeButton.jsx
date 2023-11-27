'use client'

import { useSession } from 'next-auth/react';
import React from 'react';

const LikeButton = ({ postId }) => {
  const { data: session } = useSession();

  const handleLike = async (id) => {
    console.log(id);

    const res = await fetch(`http://localhost:3000/api/post/${id}/like`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${session?.accessToken}`
      },
      body: JSON.stringify({postId:id}),
    });

    

  }

  return (
    <button onClick={() => handleLike(postId)}
      className="my-3 px-4 py-1.5 bg-blue-500 text-white rounded-full ring-2 hover:ring-4 ring-blue-800 ring-inset" type="button">Like</button>
  );
};

export default LikeButton;