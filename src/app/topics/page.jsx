'use server'

import TopicsAdd from '@/components/organization/TopicsAdd';
import TopicsList from '@/components/organization/TopicsList';
import React from 'react';

const page = () => {
  
  return (
    <div>

{/* {topicsList?.topics?.map((t,index) => 
        <ul
          key={index}
          className="p-4 border border-slate-300 my-3 flex justify-between gap-5 items-start"
        >
          <li>
            <h2 className="font-bold text-2xl">{t.title}</h2>
            <p>{t.description}</p>
          </li>
        </ul>
      )} */}

      <TopicsList/>
      <TopicsAdd/>
    </div>
  );
};

export default page;