import React,{useContext} from 'react';
import { BlogContext } from './BlogContext';
import { useParams } from 'react-router-dom';
function Details(){
    const {id} =useParams();
    const {blog}=useContext(BlogContext);
    const data=blog.find(bl=>bl.id===parseInt(id))
    console.log(data)
 return(
    <>
    <h1>{data.title}</h1>
    <p>{data.body}</p>
    </>
    
 )
}
export default Details;

