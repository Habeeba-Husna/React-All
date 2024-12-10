import React, { createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
export const BlogContext = createContext();


export function BlogProvider({ children }) {
  const [blogs, setBlogs] = useState([]);
  const navigate = useNavigate();

  
  const addBlog = (title, body) => {
    const newBlog = { id: Date.now(), title, body };
    setBlogs([...blogs, newBlog]);
    navigate('/blogs'); 
  };



  return (
    <BlogContext.Provider value={{ blogs, addBlog }}>
      {children}
    </BlogContext.Provider>
  );
}



