import React, { useState } from 'react';
import Navbar from '../Navbar/Navbar';


const AddNewAdmin = () => {
    const [info, setInfo] = useState({});
    // const [file, setFile] = useState(null);

    const handleBlur = e => {
        const newInfo = { ...info };
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo);
    }
  
    const handleSubmit = () => {
        const formData = new FormData()
        console.log(info);
       
        formData.append('email', info.email);

        fetch('http://localhost:5000/addAdmin', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
            })
            .catch(error => {
                console.error(error)
            })
    }

    return (
        <div>
            <section className="container-fluid ">
            <Navbar></Navbar>
            <div className="col-md-8 p-4 " style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>
                <h5 className="text-brand">Adding services</h5>
                <form   onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input onBlur={handleBlur} type="email" className="form-control" name="email" placeholder="Enter email" />
                    </div>
                  
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </section>
        </div>
    );
};

export default AddNewAdmin;