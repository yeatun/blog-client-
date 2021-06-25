import React, { useEffect, useState } from 'react';

import {  useHistory, useParams } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';



const BlogDetails = () => {
    const {_id} =useParams();

    const history = useHistory();
  
 
    const [blog ,setBlog] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/newService')
        .then(res => res.json())
        .then(data => setBlog(data))
    }, [])
   
    const blogList =  blog.find(blogs =>blogs?._id===_id)
  
    

    return (
        <div className="container-fluid row">
         <Navbar></Navbar>
           <div className=" p-5 text-center">
           <img style={{height: '100px'}} className="img-fluid mb-3" src= {blogList?.imageURL} alt=""/>
           <h1>{blogList?.Title}</h1>
           <p className='text-secondary'>{blogList?.Post}</p>
         
         
           </div>
           
         
        </div>
    );
};

export default BlogDetails;