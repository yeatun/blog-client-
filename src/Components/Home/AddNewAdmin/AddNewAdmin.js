import React, { } from 'react';
import { useForm } from 'react-hook-form';
import Navbar from '../Navbar/Navbar';

const AddNewAdmin = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    
    const onSubmit = data => {
        console.log(data.email);
        const email = {
       
            
             email:data.email,
             password: data.password,
             
           };

        const url = `http://localhost:5000/addAdmin`;
      
        fetch(url, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(email)
        })
        .then(res =>alert('admin created!!',res))
      };

    return (
        <section className="container-fluid ">
            <div ><Navbar></Navbar></div>
            <div className="col-md-10 p-4 pr-5" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>
            <form  onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Add Admin</label>
                        <br/>
                        <input name="email" type="text" {...register("email")}  placeholder='email' className="form-control" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">password</label>
                        <br/>
                        <input name="password" type="password" {...register("password")}  placeholder='password' className="form-control" />
                    </div>
                  
                   
                    <br/>
                    <input  className="mt-2 w-50 btn-dark btn" type="submit" />
                </form>
                {/* <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input onBlur={handleBlur} type="email" className="form-control" name="email" placeholder="Enter email" />
                    </div> */}
                   
                  
                    {/* <button type="submit" className="btn btn-primary">Submit</button> */}
                {/* </form> */}
            </div>
        </section>
    );
};

export default AddNewAdmin;