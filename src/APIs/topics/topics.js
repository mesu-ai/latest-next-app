import {  revalidateTag } from "next/cache";
import { baseURL } from "../config/baseURL";

export const getTopics = async () => {
  try {
    // const res = await fetch(`${baseURL}/api/topics`, {
    const res = await fetch(`http://localhost:3000/api/topics`, {
      // cache: "no-store",
      // next: { tags:['gettopics']}
    });

    if (!res.ok) {
      throw new Error("Failed to fetch topics");
    }

    return res.json();
  } catch (error) {
    console.log("Error loading topics: ", error);
  }
};


export const postTopic = async (data) => { 
  
  try {
    const res = await fetch(`${baseURL}/api/topics`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    });

    console.log({res})

    if(res.ok) {
      console.log("Topic created");
    }

    else{
      throw new Error("Failed to create topic");
    }

    return res.json();

  } catch (error) {
    console.log("Error creating topic: ", error);
  }
}
