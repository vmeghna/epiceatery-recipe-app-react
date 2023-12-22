import React, { useState } from "react";
import "./login.css";
import { useUser } from "../Context/Usercontext";
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  createAuthUserWithEmailAndPassword,
} from "../utils/firebase.jsx";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  const {
    formFields,
    setFormFields,
    setUser,
    setUsername,
    setEmail,
    setPassword,
    setCpassword,
  } = useUser();

  const { username, email, password, cpassword } = formFields;

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    if (password !== cpassword) {
      alert("Password do not Match");
      return;
    }
    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
      const userDocRef = await createUserDocumentFromAuth(user, {
        username,
      });
      if (userDocRef) {
        alert("SignUp Success");
        navigate("/login");
      }
    } catch (err) {
      console.log("Something Happened", err.message);
      console.log(err.code);
      if (err.code === "auth/email-already-in-use") {
        alert("Email Already Exists Please use alternate Email");
      } else if (err.code === "auth/weak-password") {
        alert("Password must be at least 6 characters long");
      }
    }
  };

  return (
    <div className="login-container">
      <div className="form-box">
        <form action="" onSubmit={submitHandler}>
          {/* {Form.map((item, index) => ( */}
          <div className="input-box">
            <label htmlFor="username"></label>
            <input
              type="text"
              placeholder="username"
              className="input"
              id="username"
              name="username"
              required
              onChange={changeHandler}
            />
            <label htmlFor="email"></label>
            <input
              type="text"
              placeholder="email"
              className="input"
              id="email"
              name="email"
              required
              onChange={changeHandler}
            />
            <label htmlFor="password"></label>
            <input
              type="password"
              placeholder="password"
              className="input"
              id="password"
              name="password"
              required
              onChange={changeHandler}
            />
            <label htmlFor="cpassword"></label>
            <input
              type="password"
              placeholder="confirm password"
              className="input"
              id="cpassword"
              name="cpassword"
              required
              onChange={changeHandler}
            />
          </div>
          {/* ))} */}
          <button type="submit" className="btn">
            Sign Up
          </button>
        </form>
        {/* <label className="label">Continue with Google</label> */}
        {/* <div className="icon-img">
          <img src="../images/google.png" alt="" />
        </div> */}
      </div>
    </div>
  );
};

export default SignUp;
