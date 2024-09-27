import React from 'react';
import axios from "axios";
import {useState} from "react";
import './signin.css';
import { useContext } from 'react';
import { AuthContext } from '../context/authContext';
import { toast } from 'react-hot-toast';
function Signup() {
  const {dispatch} = useContext(AuthContext);
  const [errors, setErrors] = useState({});
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
    });
 
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };
 
const handleSubmit = async (e) => {
        e.preventDefault();
        const newErrors = validateForm(formData);
        setErrors(newErrors);
        if (Object.keys(newErrors).length === 0) {
  try{
    const res = await axios.post("/auth/register",formData);
    await dispatch({type:"LOGIN_SUCCESS",payload:res.data});
    window.close();
    }catch(error)
    {
       toast.error(error.response.data.message);
    }
}
}
const validateForm = (data) => {
    const errors = {};
    if (data.confirmPassword !== data.password) {
        errors.confirmPassword = 'Passwords do not match';
    }

    return errors;
};
  return (
    <>
      {/* Implementing signup function */}
<div class="bodydivSignin">
{/* <div class="maincontainerSignin"> */}
<div className="form-container">
    
            <form onSubmit={handleSubmit}>
                <div>
                    <label className="form-label">
                        Name:
                        </label>
                    <input
                        className="form-input"
                        type="text"
                        name="name"
                        value={formData.name}
                        required
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label className="form-label">
                        Email:
                        </label>
                    <input
                        className="form-input"
                        type="email"
                        name="email"
                        value={formData.email}
                        required
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label className="form-label">
                        Password:
                        </label>
                    <input
                        className="form-input"
                        type="password"
                        name="password"
                        value={formData.password}
                        required
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label className="form-label">
                        Confirm Password:
                    </label>
                    <input
                        className="form-input"
                        type="password"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        required
                        onChange={handleChange}
                    />
                                        {errors.confirmPassword && (
                        <span className="error-message">
                            {errors.confirmPassword}
                        </span>
                    )}
                </div>
                <button className="submit-button"
                    type="submit">Submit</button>
            </form>
        </div>
</div>
  </>
  );
}
export default Signup;
