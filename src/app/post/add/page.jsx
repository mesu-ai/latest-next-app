'use client'

import { postTopic } from '@/APIs/topics/topics';
import React from 'react';

const PostAdd = () => {
  // const topicsList = await getTopics();

  const handleSubmit = async (e) => {

    e.preventDefault();

    console.log('clicked')


    try {
      const formData = new FormData(e.currentTarget);
      const data = {
        title: formData.get('title'),
        description: formData.get('description'),
      }
      
      const res = await postTopic(data);
      
      if (res?.ok) {
        console.log(' success');
      } else {
        throw new Error("Failed to create a blog.");
      }

    } catch (error) {
      console.log(error);

    }
  }

  return (
    <div>

      <form onSubmit={handleSubmit} className='mx-auto max-w-2xl bg-sky-400 flex flex-col px-10 py-12'>

        <label htmlFor="title">Title</label>
        <input type="text" name="title" id="title" />

        <label htmlFor="description">Description</label>
        <textarea name="description" id="description" cols="30" rows="5"></textarea>


        <button className='bg-green-700 py-2 mt-5 text-white' type="submit">Submit</button>
      </form>

    </div>
  );
};

export default PostAdd





























































































































;