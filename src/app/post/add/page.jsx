'use client'


import React from 'react';

const PostAdd = () => {

  
 

  const handleSubmit = async (e) => {

    e.preventDefault();

    console.log('clicked')


    try {
      const formData = new FormData(e.currentTarget);
      const data = {
        title: formData.get('title'),
        description: formData.get('description'),
        category: formData.get('category'),
      }

      // const res = await post(data);

      const res = await fetch('http://localhost:3000/api/post', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
      });

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
    <div className=''>

      <p className='text-center'>Add New Post</p>

      <form onSubmit={handleSubmit} className='mx-auto max-w-2xl bg-sky-100 shadow-md flex flex-col gap-y-2 px-10 py-12 '>

        <div className='flex flex-col'>
          <label htmlFor="title">Title</label>
          <input type="text" name="title" id="title" />

        </div>

        <div className='flex flex-col'>
          <label htmlFor="description">Description</label>
          <textarea name="description" id="description" cols="30" rows="5"></textarea>

        </div>

        <div className='flex flex-col'>
          <label htmlFor="category">Category</label>
          <select name='category' id='category' className='py-2'>
            <option value="technology">Tecnology</option>
            <option value="science">Science</option>
            <option value="health">Health</option>
            <option value="sports">Sports</option>
            <option value="politics">Politics</option>
            <option value="entertainment">Entertainment</option>
            <option value="business">Business</option>
            <option value="others">Others</option>
          </select>

        </div>

        <button className='mt-6 bg-green-700 py-2  text-white' type="submit">Submit</button>
      </form>

    </div>
  );
};

export default PostAdd;