import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import Navbar from '../Navbar/Navbar';


const BlogPost = () => {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const [imageURL, setIMageURL] = useState(null);
  const onSubmit = data => {
      console.log(data)
      const addPost = {
       
       Title:data.Title,
        Post:data.Post,
        imageURL: imageURL
      };
      const url = `http://localhost:5000/addPost`;
    
      fetch(url, {
        method: 'POST', 
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(addPost)
      })
      .then(res => console.log('server side response', res))
    };
  const handleImageUpload= event =>{
    console.log(event.target.files[0])
    const imageData = new FormData();
    imageData.set('key', 'd548157c08fa2d99d3a73e1a0c5ed06c');
    imageData.append('image', event.target.files[0]);
    
    axios.post('https://api.imgbb.com/1/upload', 
    imageData)
    .then(function (response) {
        console.log(response.data.data.display_url)
      setIMageURL(response.data.data.display_url);
    })
    .catch(function (error) {
      console.log(error);
    });
  }
    return (
    <div className="container-fluid row">
        <Navbar></Navbar>
  
         <div className="col-md-8" >
             <h2 className='p-5'>Add new Post</h2>
        
         <form  onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">TiTle</label>
                        <br/>
                        <input name="Title" type="text" {...register("Title")}  placeholder='Title' className="form-control" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Post</label>
                        <br/>
                        <input name="Post" type="text" {...register("Post")}  placeholder='Post' className="form-control" />
                    </div>
                  
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Upload a image</label>
                        <input onChange={handleImageUpload}type="file" className="form-control" id="exampleInputPassword1" placeholder="Picture" />
                    </div>
                    <br/>
                    <input type="submit" />
                </form>
         </div>
    </div>
    );
};

export default BlogPost;