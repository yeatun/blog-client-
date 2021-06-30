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
      fetch('https://sleepy-bayou-04521.herokuapp.com/isAdmin', {
          method: 'POST',
          headers: { 'content-type': 'application/json' },
          body: JSON.stringify({ email: loggedInUser.email })
      })
          .then(res => res.json())
          .then(data => setIsAdmin(data));
  }, [])

  const handleDelete = (id) => {
    fetch(`https://sleepy-bayou-04521.herokuapp.com/deleteProduct/${id}`, {
        method: 'DELETE'
    })
        .then(res => res.json())
        .then(result => {
            // console.log('delete successfully');
            alert('blog deleted successfully ');
        })
}
    return (
        <div   className="col-sm-3 "  >
     
     <div className="border m-2">
    <div className="blogs blog-content">
    <img style={{width: '200px'}} src={newPost.imageURL} alt="" />
         <h5 className="text-dark text-center">{newPost.Title}</h5>
        <p className="text-dark text-center">{newPost.Post}</p>
          <div className='row '>
          <div  className='text-center p-2'>
         <Link  to={`/blogDetails/${newPost._id}`} className='btn btn-dark '>see more</Link> 
          </div>
        
         {isAdmin &&    <div className='text-center'>
         <button className="btn btn-danger " onClick={() => handleDelete(newPost._id)}       ><FontAwesomeIcon icon={faTrashAlt} /></button>
         </div>}
          </div>
    </div>
    </div>
   
    </div>
    // <div className="text-center mt-5">
    
    //   <div className="row w-75 m-auto d-flex align-items-center justify-content-center">
    //     <div className="col-md-12 col-sm-12 col-lg-4 p-5">
    //       <div >
    //         <img  src={newPost.imageURL} alt="" />
    //         <h5 className="text-dark text-center">{newPost.Title}</h5>
    //         <p className="text-dark text-center">{newPost.Post}</p>
    //         <Link  to={`/blogDetails/${newPost._id}`} className='btn btn-dark '>see more</Link>
    //         {isAdmin &&    <div className='text-center'>
    //        <button className="btn btn-danger " onClick={() => handleDelete(newPost._id)}       ><FontAwesomeIcon icon={faTrashAlt} /></button>
    //        </div>}
    //       </div>
    //     </div>
      
    
    //   </div>
    // </div>
    );
};

export default StoriesInfo;