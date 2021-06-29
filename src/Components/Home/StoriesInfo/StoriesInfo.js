import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import './Stroriesinfo.css'
const StoriesInfo = ({newPost}) => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [isAdmin, setIsAdmin] = useState(false);
    useEffect(() => {
      fetch('http://localhost:5000/isAdmin', {
          method: 'POST',
          headers: { 'content-type': 'application/json' },
          body: JSON.stringify({ email: loggedInUser.email })
      })
          .then(res => res.json())
          .then(data => setIsAdmin(data));
  }, [])

  const handleDelete = (id) => {
    fetch(`http://localhost:5000/deleteProduct/${id}`, {
        method: 'DELETE'
    })
        .then(res => res.json())
        .then(result => {
            // console.log('delete successfully');
            alert('blog deleted successfully ');
        })
}
    return (
        <div className='stories col-md-3 shadow text-center ' style={{ height: "70vh" }}>
       <img style={{width: '200px'}} src={newPost.imageURL} alt="" />
         <h5 className="text-dark text-center">{newPost.Title}</h5>
        <p className="text-dark text-center">{newPost.Post}</p>
            <div>
         <Link  to={`/blogDetails/${newPost._id}`} className='btn btn-dark'>see more</Link> 
          </div>
        
         {isAdmin &&    <div>
         <button className="btn btn-primary" onClick={() => handleDelete(newPost._id)}>Delete</button>
         </div>}
    </div>
    );
};

export default StoriesInfo;