import React, { Children } from 'react';

const BlogLayout = ({children, modal}) => {
  return (
    <div>
      {modal}
      {children}
      
    </div>
  );
};

export default BlogLayout;