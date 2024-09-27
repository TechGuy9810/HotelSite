import React from 'react';
import useFetch from "../hook/useFetch";
import './featured.css';
import { useState ,useContext} from 'react';
import BeatLoader from "react-spinners/BeatLoader";
import Details from './Details.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark,faHeart } from '@fortawesome/free-solid-svg-icons';
import {AuthContext} from '../context/authContext';
import toast from 'react-hot-toast';
import axios from "axios";
const ForigenDestination=React.memo(()=>{

const {data,loading,error}= useFetch("/hotel/country?limit=3");
const {user} = useContext(AuthContext);
const [destination,setDestination] = useState(null);
const [country,setCountry] = useState(null);
const [details,setDetails] = useState(false);

const handleClick = async (event)=>{
  const city = event.target.id;
  setDestination(city);
  const country = event.target.name;
  setCountry(country);
  setDetails(true);
}
const addToFavorites = async(event)=>{
  const hotelId = event.currentTarget.id;
  const userId = user._id;
  try{
    const res = await axios.post(`/user/liked`,{userId,hotelId});
    toast.success(res.data);
  }
  catch(err)
  {
    console.log(err);
        toast.error(err.response.data);
  }
  }
return(
    <>
    <div class="" id="container-package2">
  <div class="card-Heading"><p class="text-2xl">Popular <span style={{color:'rgb(242, 75, 103)'}}>Destinations</span></p></div>
      {loading ? (<div  style={{display:"flex",justifyContent:"center",alignItems:"center"}}><BeatLoader/></div>):(error?(toast.error("Error Loading Hotels")):(
  <>
    <div class="row" id="child-row">
    {data.map((item)=>(
          <div class="col-sm" key={item.id} >
          <div class="card" id='card'>
        <img class="card-img-top" src={`/Image/${item.photos}`} alt="Card"/>
        <div class="card-body">
          <h5 class="card-title text-xl font-bold">{item.city}, {item.country}</h5>
          <div style={{display:"flex",justifyContent:"space-between",fontWeight:"500"}}><button class="btn btn-primary" id={item.city} name={item.country} onClick={event=>handleClick(event)}>View Now!</button>
          <button className='heartBtn' id={item._id} onClick={event=>addToFavorites(event)} style={{textDecoration:"none"}}><FontAwesomeIcon icon={faHeart} style={{cursor:'pointer'}}/></button>
          </div>
        </div>
      </div>
          </div>
      ))
      }
  </div></>))}
  </div>
  {
    details&&(
      <>

<button className='DetailCloseBtn' onClick={()=>{setDetails(prev=>!prev)}}>< FontAwesomeIcon icon={faXmark} /></button>
      <Details Data={{destination,country}}/>
      </>
    )
  }
    </>
);
});
export default ForigenDestination;
