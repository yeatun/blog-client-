import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import './Navbar.css'

const Navbar = () => {
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
    return (
      
        <div className='navar-container'>
          <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
             <nav class="navbar navbar-expand-lg navbar-light  text-white">
  <div class="container-fluid">
   
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
   <ul>
   <li class="nav-item ">
          <a class="nav-link text-brand" aria-current="page" href="/"><h3><b>Today's Blog </b> </h3></a>
        </li>
   </ul>
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
     
        {/* <li class="nav-item">
          <a class="nav-link ms-5 active text-brand" aria-current="page" href="/blog">Home</a>
        </li> */}
         <li class="nav-item">
          <Link class="nav-link ms-5 text-brand " to="/blog">Home</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link ms-5 text-brand " to="/adminLogin">Admin Login</Link>
        </li>
        {isAdmin &&    <div>
        <li class="nav-item">
          <Link class="nav-link ms-5 text-brand " to="/blogPost">blog post</Link>
        </li>
        </div>}
        {/* <li class="nav-item">
          <Link class="nav-link ms-5 text-brand " to="/admin">Make Admin</Link>
        </li> */}
        {isAdmin &&    <div>
       <li class="nav-item">
          <Link class="nav-link ms-5 text-brand " to="/admin">Make Admin</Link>
        </li>
      
       </div>}
       
        <li class="nav-item">
          <Link class="nav-link ms-5 text-brand " to="/login">login</Link>
        </li>
        <li class="nav-item">
        <Link class="nav-link ms-5 text-brand " > {loggedInUser.email}</Link>
        </li>
      
      
      </ul>
      
    </div>
  </div>
</nav>
</UserContext.Provider>
        </div>
    );
};

export default Navbar;