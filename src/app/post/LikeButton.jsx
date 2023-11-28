'use client'

import { baseURL } from '@/APIs/config/baseURL';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import React from 'react';
import { useMutation, useQueryClient } from 'react-query';



const handleLike = async (data) => {
  console.log(data);

  const res = await fetch(`${baseURL}/api/post/${data?.postId}/like`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${data?.accessToken}`
    },
    body: JSON.stringify({postId:data?.postId}),
  });

  const jsondata = await res?.json();
  
  if(jsondata?.ok){
    console.log(data);
    
  }
 

}


const LikeButton = ({ postId, isLike }) => {
  const { data: session } = useSession();
  const router = useRouter();
  const queryClient = useQueryClient();

  const {mutateAsync, isLoading}= useMutation((data)=>handleLike(data),{
    onSuccess: ()=>{
      queryClient.invalidateQueries('posts')
    }
  })

//  console.log({isLoading})

 

  const handleSubmit = async (id) => {
    const data ={
      postId: id,
      accessToken: session?.accessToken
    }

    await mutateAsync(data);

  }

  return (
    <button onClick={() => handleSubmit(postId)} disabled={isLoading}
      className={`my-3 px-4 py-1.5 bg-blue-500 text-white rounded-full ring-2 hover:ring-4 ring-blue-800 ring-inset disabled:bg-blue-300`} type="button">{isLike ? 'UnLike' : 'Like'}</button>
  );
};

export default LikeButton;