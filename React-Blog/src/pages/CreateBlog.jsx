
import React, { useState, useContext } from 'react';
import { BlogContext } from './Context/BlogContext';

function CreateBlog() {
  const { addBlog } = useContext(BlogContext); 
  const [title, setTitle] = useState([]); 
  const [body, setBody] = useState([]);



  const handleSubmit = (e) => {
    e.preventDefault();
    addBlog(title, body); 
  };



  return (
    <div>
      <h1>New Blog Post</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)}/>
        <textarea placeholder="Body" value={body} onChange={(e) => setBody(e.target.value)}/>
        <button type="submit">Save</button>
        
      </form>
    </div>
  );
}

export default CreateBlog;



