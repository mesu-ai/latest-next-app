'use client'

import React from 'react';

const LikeButton = ({ postId}) => {
  
const handleLike = (id) => {
  console.log(id);
}

  return (
    <button onClick={()=>handleLike(postId)}
     className="my-3 px-4 py-1.5 bg-blue-500 text-white rounded-full ring-2 hover:ring-4 ring-blue-800 ring-inset" type="button">Like</button>
  );
};

export default LikeButton;