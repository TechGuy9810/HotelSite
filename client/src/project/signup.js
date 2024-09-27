import React from 'react';
import axios from "axios";
import {useState} from "react";
import './signup.css';
import { useContext } from 'react';
import { AuthContext } from '../context/authContext';
import { useNavigate } from 'react-router-dom';
import ClipLoader from "react-spinners/ClipLoader";
import toast from 'react-hot-toast';
function Signin() {
  const [inputs,setInputs] = useState({
    email:undefined,
    password:undefined
  });
  const {loading,error,dispatch} = useContext(AuthContext);

  const navigate = useNavigate();
  const handleChange = (e) =>{
setInputs(prev=>({...prev,[e.target.id]:e.target.value}))
  }
  const handleSubmit = async (e) =>{
    e.preventDefault();
    try{
    const res = await axios.post("/auth/login",inputs);
    dispatch({type:"LOGIN_SUCCESS",payload:res.data});
    navigate("/");
    }
    catch(err)
    { 
        toast.error(err.response.data.message);
    }
  }
  return (
    <>
    {loading?(<ClipLoader />):(error?(toast.error("Invalid Username or Password")):(
            <div class="bodydivSignup">
            <div class="mainContainerSignup">
                <div class="containerdivSignup">
                  <form action="#" method="post" onSubmit={handleSubmit}>
                    <label for="email">Email</label>
                    <input type="email" id="email" name="email" required={true} onChange={handleChange}/>
                    <label for="password">Password</label>
                    <input type="password" id="password" name="password" required={true} onChange={handleChange}/>
                    <button className='SignupBtnDiv'>Submit</button>
                  </form>
              </div>
            </div>
            </div>
    )
    )}
  </>
  );
}

export default Signin;