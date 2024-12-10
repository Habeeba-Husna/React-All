import React, { useContext } from 'react';
import { BlogContext } from './Context/BlogContext';
import { useParams } from 'react-router-dom';

function BlogDetail() {
  const { blogs } = useContext(BlogContext);
  const { id } = useParams(); 
  const blog = blogs.find((b) => b.id === parseInt(id)); 

  if (!blog) return <p>Blog not there</p>;

  return (
    <div>
      
      <h1>{blog.title}</h1>
      <p>{blog.body}</p>
    </div>
  );
}

export default BlogDetail;

