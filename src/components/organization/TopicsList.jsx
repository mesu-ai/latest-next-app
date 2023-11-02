"use client";

import { getTopics, postTopic } from "@/APIs/topics/topics";
import Link from "next/link";
import { useEffect, useState } from "react";



export default async function TopicsList() {
  const [allTopics, setAllTopics] = useState([]);

  


  useEffect(() => {
  const fetchTopics = async() => {
      const topicsList = await getTopics();
      console.log(topicsList?.topics);
      setAllTopics(topicsList?.topics);
    }

  fetchTopics();

  }, []);

console.log(allTopics);

  // const topicsList = await getTopics();
  // console.log(topicsList?.topics);

  const handleSubmit = async (e) => {

    e.preventDefault();

    console.log('clicked')


    try {
      const formData = new FormData(e.currentTarget);
      const data={
        title: formData.get('title'),
        description: formData.get('description'),
      }
    

      const res= await postTopic(data);
      console.log({ res });

      if (res.ok) {
        // router.push("/");
      } else {
        throw new Error("Failed to create a blog.");
      }
      
    } catch (error) {
      console.log(error);
      
    }
  }

  return (
    <>

      {topicsList?.topics?.map((t,index) => 
        <ul
          key={index}
          className="p-4 border border-slate-300 my-3 flex justify-between gap-5 items-start"
        >
          <li>
            <h2 className="font-bold text-2xl">{t.title}</h2>
            <p>{t.description}</p>
          </li>
        </ul>
      )}

      <form onSubmit={handleSubmit} className='mx-auto max-w-2xl bg-sky-400 flex flex-col px-10 py-12'>

        <label htmlFor="title">Title</label>
        <input type="text"  name="title" id="title" />

        <label htmlFor="description">Description</label>
        <textarea name="description" id="description" cols="30" rows="5"></textarea>


        <button className='bg-green-700 py-2 mt-5 text-white' type="submit">Submit</button>
      </form>

    </>
  );
}