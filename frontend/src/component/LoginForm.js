import React, { useState } from "react";
import { Link } from "react-router-dom";
import Validation from "./LoginValidation";

const LoginForm = () => {

    const [values,setValues]=useState(
        {
            email:'',
            password:''
        }
    )

    const[errors,setErrors]=useState({})

    const handleInput=(event)=>{
        setValues(prev=>({...prev,[event.target.name]:[event.target.value]}))
    }

    const handleSubmit=(event)=>{
        event.preventDefault();
        setErrors(Validation(values));

    }

    


  return (
    <div className="d-flex justify-content-centre align-item-centre bg-primary vh-100">
      <div className="bg-white p-3 rounded w-25">
        <h2>Log-In</h2>
        <form action="" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email"><strong>Email</strong></label>
            <input type="email" placeholder="Enter Email" name="email"
            onChange={handleInput} className="form-control rounded-0"/>
            {errors.email && <span className="text-danger">{errors.email}</span>}
          </div>
          <div className="mb-3">
            <label htmlFor="password"><strong>Password</strong></label>
            <input type="password" placeholder="Enter Password" name="password" onChange={handleInput} className="form-control rounded-0"/>
            {errors.password && <span className="text-danger">{errors.password}</span>}
          </div>
          <button className="btn btn-success w-100"><strong>Log in</strong></button>
          <p>you are agree to our terms and conditon</p>
          <Link to='/signup' className="btn btn-default border w-100 bg-light">Create account</Link>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;