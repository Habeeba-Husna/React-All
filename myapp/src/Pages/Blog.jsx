
import { BlogContext } from './BlogContext';
import React,{useState,useContext} from 'react';
import {useNavigate} from 'react-router-dom';

function Blog(){
    const {addBlog} =useContext(BlogContext);
    const [title,setTitle]=useState('');
    const [body,setBody]=useState('');
    const navigate=useNavigate();
 function Save(){
    addBlog(title,body)
    navigate('/')
 }
 return(
    <>
        <input type='text' placeholder='title' value={title} onChange={(e)=>setTitle(e.target.value)}/>
        <textarea placeholder='body' value={body} onChange={(e)=>setBody(e.target.value)}/>
            <button onClick={Save}>Save</button>
    </>
 )
}
export default Blog;
