import React from 'react';
import Navbar from './Navbar/Navbar';
import Stories from './Stories/Stories';
import './Blog.css'

const Blog = () => {
    return (
        <div className='blog-container'>
            <Navbar></Navbar>
            <Stories></Stories>
        </div>
    );
};

export default Blog;