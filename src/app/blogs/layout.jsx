/* eslint-disable prettier/prettier */

import React from 'react';

const BlogLayout = ({ children, modal }) => {
  return (
    <div>
      {modal}
      {children}
    </div>
  );
};

export default BlogLayout;