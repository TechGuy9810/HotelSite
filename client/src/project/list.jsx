import React from 'react'
import { useState, useContext} from "react";
import {NavLink} from 'react-router-dom';
import './list.css';
import useFetch from '../hook/useFetch';
import toast from 'react-hot-toast';
import BeatLoader from "react-spinners/BeatLoader";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMap,faXmark} from '@fortawesome/free-solid-svg-icons';
import { SearchContext } from "../context/searchContext";
import Map from './Map';
const notify = (e) => {
  toast.dismiss();
  toast(e);
}
// component to list all hotels.
const List = ()=>{
    const {destination} = useContext(SearchContext);
    const {country} = useContext(SearchContext);
    const [map,setMap] = useState(false);
    const {data,loading,error} = useFetch(`/hotel/requested?city=${destination}&country=${country}`);
    if(error!==false)
    {
      notify(error.response.data.message);
    }
    return(
<>


  <div className='body'>
    <div className='landing' id='landing-hotel'>
            <div class="container row" id="container-list">
              <div class="row" id="child-row-list">

                <div class="col-sm">
                {loading?(<div style={{display:"flex", alignItems:"center",justifyContent:"center",height:"100vh", width:"100%"}} ><BeatLoader/></div>):(
error?(toast.error("Trouble Finding Hotel")):(data.map((i)=>{
  return(<>
                  <div class="card-list" id={i._id}>
                    <div class="card-image"><img id="card-image-list" src={`/Image/${i.photos}`} alt="Hotel"/></div>
                   <div class="card-body">
                       <h5 class="card-title text-xl font-bold">{i.name}</h5>
                       <p class="hotel-type">{i.type}</p>
                       <h6 class="hotel-city">{i.city}</h6>
                       <p class="hotel-address">{i.address}</p>
                       <p class="hotel-desc">{i.desc}</p>
                       <div className='Btns'>
                       <NavLink to={`/hotel/${i._id}`}><button class="btn btn-danger">Check Rooms</button></NavLink>
                       <button class="btn btn-danger" onClick={()=>setMap(!map)}><FontAwesomeIcon icon={faMap}/>&nbsp;View in Map</button>
                       </div>
                    </div>
                   </div>
                   </>);
})
)
)}
                  </div>
               </div>
             </div>
{/* this is a map componnent where user can see hotel in google maps */}
{map&&(
<>
<Map/>
<button className='CloseBtnMap' onClick={()=>setMap(!map)}>< FontAwesomeIcon icon={faXmark} /></button>
</>)}
    </div>
</div>
</>
    );
}
export default List;