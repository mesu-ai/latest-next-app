
import { getTopics, postTopic } from "@/APIs/topics/topics";
import Link from "next/link";


export default async function TopicsList() {

  const topicsList = await getTopics();

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

    </>
  );
}