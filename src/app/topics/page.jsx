'use server'

import TopicsAdd from '@/components/organization/TopicsAdd';
import TopicsList from '@/components/organization/TopicsList';
import React from 'react';

const page = () => {
  
  return (
    <div>
      <TopicsList/>
      <TopicsAdd/>
    </div>
  );
};

export default page;