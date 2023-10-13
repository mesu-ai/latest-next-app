import React, { Children } from 'react';

const BlogLayout = ({children, modal}) => {
  return (
    <div>
      
      {/* shihab anoyar
      01759180441 */}
      {modal}
      {children}
      
    </div>
  );
};

export default BlogLayout;