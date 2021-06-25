import React from 'react';
import { Link } from 'react-router-dom';
const StoriesInfo = ({newPost}) => {
    return (
        <div className='col-md-3 text-center'>
       <img src={newPost.imageURL} alt="" />
         <h5 className="text-dark text-center">{newPost.Title}</h5>
        <p className="text-dark text-center">{newPost.Post}</p>
     
         <Link  to={`/blogDetails/${newPost._id}`} className='btn btn-dark'>see more</Link>
    </div>
    );
};

export default StoriesInfo;