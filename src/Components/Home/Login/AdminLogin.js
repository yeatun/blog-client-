import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { useState } from "react";
// import "./AdminLogin.css";
import { useHistory} from "react-router-dom";
import { UserContext } from "../../../App";
import Navbar from "../Navbar/Navbar";


const AdminLogin = () => {
  const [error, setError] = useState(false);
  const [user, setUser] = useContext(UserContext);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    fetch("https://sleepy-bayou-04521.herokuapp.com/adminLogin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result) {
          setError(false);
          const userInfo = { ...user };
          userInfo.email = data.email;
          setUser(userInfo);
          handleOnClick();
          console.log("login successfully");
        } else {
          setError(true);
          console.log("opps something Wrong");
        }
      });
    console.log(data);
  };

  let history = useHistory();
  const handleOnClick = () => history.push("/blog");

  return (
    <div className="container-fluid container">
        <div>
        <Navbar></Navbar>
        </div>
      <div className="col-md-8 shadow m-5 p-5">
      <h3 className="text-dark">Admin Login</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        {error && <p style={{ color: "red" }}>Invalid Email or Password !</p>}
        <input
          className="input-field w-100"
          {...register("email", { required: true })}
          placeholder="email"
          type="email"
          name="email"
          required
        />
        <br />

        <input
          className="input-field w-100"
          {...register("password", { required: true })}
          placeholder="Password"
          name="password"
          type="password"
          required
        />
        <br />
        <input
          className="mt-2 w-50 btn-dark btn"
          type="submit"
          value="Admin Login"
        />
      </form>
      </div>
    </div>
  );
};

export default AdminLogin;