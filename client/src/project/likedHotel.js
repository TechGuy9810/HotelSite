import React, { useState,useContext, useEffect } from 'react';
import Details from './Details.jsx';
import ClipLoader from "react-spinners/ClipLoader";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark} from '@fortawesome/free-solid-svg-icons';
import './featured.css';
import { toast } from 'react-hot-toast';
import {AuthContext} from '../context/authContext';
import axios from "axios";

// This is component for showing favorite hotels of user.
const LikedHotel=()=>{

    const {user} = useContext(AuthContext);
    const [data,setData] = useState([{}]);
    const [destination,setDestination] = useState(null);
    const [country,setCountry] = useState("India");
    const [details,setDetails] = useState(false);
    const [loading,setLoading] =useState(false);

    // function to fill up user prefernce for booking a room.
    const handleClick = async (event)=>{
      const city = event.target.id;
      setDestination(city);
      const country = event.target.name;
      setCountry(country);
      setDetails(true);
    }
    const removeHotels = async(e)=>{
      const hotelId = e.target.id;
      const userId = user._id;
      try{
        const result = await axios.post(`/user/cancelLikedHotel`,{hotelId,userId});
        if(result.status===200)
        {
          toast.success(result.data);
          window.location.reload(true);
        }
      }catch(err)
      {
            toast.error(err.response.data);
      }
    }
    // to get data of all hotels user liked it
    useEffect(()=>{
      const userId = user._id;
        const hotels = async()=>{
               try{
                setLoading(true);
           const res = await axios.get(`/user/getUserHotel/${userId}`);
           setData(res.data);
           setLoading(false);
               }
               catch(err)
               {
                  toast.error(err.response.data.message);
               }
        };
        hotels();
    },[user._id]);
    return(
        <>
    <div className='mainContainerSavedHotels'>
    <div className="" id="container-package1">
      <div className="card-Heading" id="card-Heading-Featured"><p>Saved<span style={{color:'rgb(242, 75, 103)'}}>Hotels</span></p></div>
      {loading ? (<div  style={{display:"flex",justifyContent:"center",alignItems:"center"}}><ClipLoader/></div>):(
      (data.length!==0)?(
        <>
        <div class="col" id="child-col">
        {data.map((item)=>(
              <div class="col-sm" key={item._id} id='cardMainLikedHotels'>
              <div class="card" id='card'>
            <img class="card-img-top" src={`/Image/${item.photos}`} alt="Card"/>
            <div class="card-body">
              <h5 class="card-title">{item.city}</h5>
              <div style={{display:"flex",justifyContent:"space-between",fontWeight:"500"}}><button class="btn btn-success" id={item.city} name={item.country} onClick={event=>handleClick(event)}>View Now</button>
              <button className='btn btn-danger' id={item._id} onClick={e=>removeHotels(e)}>Remove</button>
              </div>
            </div>
          </div>
              </div>
          ))
          }
      </div>
      </>
      ):(
        <>
        <div className='mainNoFavoriteContainer'>
          <p className='noFavorite'>No Hotels Saved Yet!</p>
        </div>
        </>
      )
      )}
    
    </div>
    </div>
    {
        details&&(
          <>
     {/* component to open prefernce setter name details */}
    <button className='DetailCloseBtn' onClick={()=>{setDetails(prev=>!prev)}}>< FontAwesomeIcon icon={faXmark} /></button>
          <Details Data={{destination,country}}/>
          </>
        )
      }
        </>
    );
    }

export default LikedHotel;



