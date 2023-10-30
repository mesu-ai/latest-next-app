import Link from "next/link";
import { useState } from "react";
// import RemoveBtn from "./RemoveBtn";
// import { HiPencilAlt } from "react-icons/hi";

const getTopics = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/topics", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch topics");
    }

    return res.json();
  } catch (error) {
    console.log("Error loading topics: ", error);
  }
};

export default async function TopicsList() {
  const [state, setState] = useState([]);

  const topics = await getTopics();

  console.log({ topics });

  


  const handleBlur = (e) => {
    console.log(e.target.value)
    const { name, value } = e.target;
    const newValue = {...state};
    newValue[name]=value;
    setState(newValue)
  }


  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:3000/api/topics", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(state),
      });

      console.log({res});

      if (res.ok) {
        router.push("/");
      } else {
        throw new Error("Failed to create a blog.");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
    <form className='mx-auto max-w-2xl bg-sky-400 flex flex-col px-10 py-12'
        onSubmit={(e) => handleSubmit(e)}>

        <label htmlFor="title">Title</label>
        <input type="text" onBlur={(e)=>handleBlur(e)} name="title" id="" />

        <label htmlFor="description">Description</label>
        <textarea name="description" onBlur={(e)=>handleBlur(e)} id="" cols="30" rows="5"></textarea>


        <button className='bg-green-700 py-2 mt-5 text-white' type="submit">Submit</button>
      </form>


      {/* {topics && topics?.map((t) => (
        <div
          key={t._id}
          className="p-4 border border-slate-300 my-3 flex justify-between gap-5 items-start"
        >
          <div>
            <h2 className="font-bold text-2xl">{t.title}</h2>
            <div>{t.description}</div>
          </div>

          <div className="flex gap-2">
            <RemoveBtn id={t._id} />
            <Link href={`/editTopic/${t._id}`}>
             
              edit
            </Link>
          </div>
        </div>
      ))} */}
    </>
  );
}