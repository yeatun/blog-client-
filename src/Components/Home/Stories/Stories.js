import React, { useEffect, useState } from 'react';
import StoriesInfo from '../StoriesInfo/StoriesInfo';
  


const Stories = () => {
    const [newPosts, setNewPosts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/newPost')
        .then(res => res.json())
        .then(data => setNewPosts(data))
    }, [])
    
    return (
        <div>
               <section className="justify-content-center  my-5 py-5 ">
        <div className="container ">
            <div className="section-header text-center">
             
               
            </div>
            <div className=" row mt-5  pt-5">
                 {
                     newPosts.map(newPost => <StoriesInfo newPost={newPost} key={newPost.id}/>)
                 }
             </div>
        </div>
    </section>
        </div>
    );
};

export default Stories;