
import React,{useState,createContext} from 'react';
export const BlogContext =createContext();

function BlogProvider({children}){
    const [blog,setBlog]=useState([]);

const addBlog=(title,body)=>{
    const newBlog={id:blog.length,title,body}
    setBlog([...blog,newBlog])
}

const deleteBlog=(id)=>{
    setBlog(blog.filter(a=>a.id!==id))
}
return(
    <BlogContext.Provider value={{blog,addBlog,deleteBlog}}>
    {children}
    </BlogContext.Provider>
)
}
export default BlogProvider;