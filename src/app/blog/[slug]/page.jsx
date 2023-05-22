/* eslint-disable prettier/prettier */

import React from 'react';

const page = ({slug}) => {

  return (
    <div>
      {slug}
      
    </div>
  );
};

export default page;


export async function generateStaticParams() {
  const posts = await fetch('https://jsonplaceholder.typicode.com/posts').then((res) => res.json());


 
  return posts.map((post) => ({
    slug: post.slug,
  }));
}




