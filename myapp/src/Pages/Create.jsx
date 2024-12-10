import { BlogContext } from './BlogContext';
import React,{useState,useContext} from 'react';
import { useNavigate } from 'react-router-dom';
function Create(){
    const {blog,deleteBlog}=useContext(BlogContext);
    const navigate=useNavigate();
    return(
        <>
        <button onClick={()=>navigate('/Blog')}>Create</button>
        {blog.map(b=>(
            <div key={b.id}>
                {/* <link >{b.title}</link> */}
                <h1 onClick={()=>navigate(`/Details/${b.id}`)}>{b.title}</h1>
                <button onClick={()=>deleteBlog(b.id)}>Delete</button>
            </div>
        ))}
        </>
    )
}
export default Create;