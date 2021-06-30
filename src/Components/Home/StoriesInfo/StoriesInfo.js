import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import './Stroriesinfo.css';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
        <div className='stories col-md-3  ' >
     <div className ="border">
     <img style={{width: '200px'}} src={newPost.imageURL} alt="" />
         <h5 className="text-dark text-center">{newPost.Title}</h5>
        <p className="text-dark text-center">{newPost.Post}</p>
          <div className='row '>
          <div  className='text-center p-2'>
         <Link  to={`/blogDetails/${newPost._id}`} className='btn btn-dark '>see more</Link> 
          </div>
        
         {isAdmin &&    <div className='text-center'>
         <button className="btn btn-danger " onClick={() => handleDelete(newPost._id)}><FontAwesomeIcon icon={faTrashAlt} /></button>
         </div>}
          </div>
     </div>
    </div>
    );
};

export default StoriesInfo;