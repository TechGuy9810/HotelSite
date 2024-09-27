import axios from 'axios';
import React from 'react'
import { useState,Fragment} from 'react';
import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import toast from 'react-hot-toast';
import './EmailVerify.css';
const EmailVerify = () => {
     const [validUrl,setValidUrl] = useState(false);
     const param = useParams();

     useEffect(()=>{
             const verifyEmailUrl = async()=>{
        try{
       await axios.get(`/express/auth/${param.id}/verifyUser/${param.token}`);
        setValidUrl(true);
        toast.success("Account Created");
        }catch(error)
        {
            setValidUrl(false);
            toast.error(error.response.data.message ||"Error Verifiying Account");
        }
    }
    verifyEmailUrl();
 },[param]);

    return (
<Fragment>
    {validUrl?(
<>
<div className='MainContainerEmailVerify'>
    <div className='ContainerEmail'>
    <h1 className='EmailStatus'> Email Verfied<span style={{color:"green"}}> Successfuly</span></h1>
    <Link to="/">
        <button className='btn-for-hotel-search'>Search Hotels</button>
    </Link>
    </div>
</div>
</>
    ):(
<>
<div className='MainContainerEmailVerify'>
<div className='ContainerEmail'>
<h1 className='EmailStatus'>Email Verfication Failed! Please Try again</h1>
<img className='oops' src={`/Image/oops.png`}  alt="oops" />
</div>
</div>
</>
    )}
</Fragment>
  );
}

export default EmailVerify
