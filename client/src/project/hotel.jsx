import React, { useContext, useMemo, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import './hotel.css';
import { useLocation} from "react-router-dom";
import BeatLoader from "react-spinners/BeatLoader";
import { SearchContext } from "../context/searchContext";
import {AuthContext} from "../context/authContext";
import axios from "axios";
import Wishlist from "./Wishlist";
import { toast } from "react-hot-toast";
const Hotel = ()=>{
  const location = useLocation();
  const [showImageCarousel,setShowImageCarousel] = useState(false);
  const [max,setMax] = useState(10000);
  const [min,setMin] = useState(0);
  const id = location.pathname.split("/")[2];
  const {dates} = useContext(SearchContext);
  const {user} = useContext(AuthContext);
  const [data, setData] = useState([{}]);
  const [loading, setLoading] = useState(false);
  const [roomToBook,setRoomToBook] = useState([]);
  const [roomPrice,setRoomPrice] = useState(0);
useMemo(() => {
  const fetchData = async () => {
    setLoading(true);
    try {
      const res = await axios.post(`/booking/avail/`,{hotelid:id,from_date:dates[0][0],to_date:dates[0][1]});
      setData(res.data);
    } catch (err) {
      toast.error("Unexpected Error");
    }
    setLoading(false);
  };
  fetchData();
}, [dates,id]);
const refetchData = async () => {
  setLoading(true);
  try {
    const res = await axios.post(`/booking/avail/`,{hotelid:id,from_date:dates[0][0],to_date:dates[0][1]});
    setData(res.data);
  } catch (err) {
    toast.error("Unexpected happen");
  }
  setLoading(false);
};
const handleSelectedRoom = (e)=>{
  if(roomToBook.length===0)
  {
    setRoomToBook([...roomToBook,e.target.id]);
    setRoomPrice(roomPrice=>roomPrice+parseInt(e.target.value));
  }
else{
let HotelFound = roomToBook.includes(e.target.id);
if(!HotelFound)
{
  setRoomToBook([...roomToBook,e.target.id]);
  setRoomPrice(roomPrice=>roomPrice+parseInt(e.target.value));
}
}
}
const hanldeRemoveRoom = (e)=>{
  if(roomToBook.length>0)
  {
    if(roomToBook.includes(e.target.id))
    {
      setRoomToBook(prev => prev.filter(t => t !== e.target.id ));
      setRoomPrice(roomPrice=>roomPrice-parseInt(e.target.value));
    }
  }
}
    return(
<>
<div className='body'>
{
  (loading===true)?(<div style={{display:"flex", alignItems:"center",justifyContent:"center",height:"100vh", width:"100%"}} ><BeatLoader/></div>):((data.length===0)?(
  <>
  <div className='NoRoomsAvailable'>
  <div className="HeadingNoAvailableRooms" ><p>Sorry! No Rooms Available</p></div>

  </div>
  </>):(<>
    <div className='landingHotel' id="landingHotelContainer">
     <div className="Heading-available-Rooms"><p>Available Rooms</p></div>
     
     <div className="Search-room">
      <div className="main-row-search-1">
      <div className="main-col1-1">
        <div className="maxLimit">
          <p className="limitHeading">Max:&nbsp;₹</p>
          </div>
             <input type="number" onChange={event=>setMax(event.target.value) } value={max}/>
      </div>
      <div className="main-col2-1">
      <div className="minLimit">
        <p className="limitHeading">Min:&nbsp;₹</p>
        </div>
         <input type="number" onChange={event=>setMin(event.target.value)} value={min}/>
      </div>
      <div className='main-col3-1'><button onClick={refetchData}>Search</button></div>
      </div>
      </div>
<div className="hotelContainer">
    {loading?<BeatLoader />:(
      data.filter((val)=>{
        if(val.price<=max&&val.price>=min)
        {
          return val;
        }
        if(max==='')
        {
          return val;
        }
        else{
        return ''
        }
      }).map((roomData)=>{
      return(
        <>
<div className="hotelWrapper">
  <div className="hotelImage">
    <div className="MainHotelImage">
    <img class="card-img-top" src={`/Image/${roomData.img[1]}`} alt="Card"/>
    </div>
<div className="hotelImagePreview">
  {roomData.img.map((PreviewImage)=>{
    return(
      <>
    <div className="ImagePreviewContainer">
    <img class="card-img-top" src={`/Image/${PreviewImage}`} alt="Card" onClick={()=>setShowImageCarousel(`/Image/${PreviewImage}`)}/>
    </div>
    </>
    )
  })}
  </div>
  </div>
<div className="hotelDetails">
<div className="hotelAddress">
<span>Room</span>&nbsp;:&nbsp;{roomData.roomNumber}
</div>
  <div className="hotelDetailsTexts"><span>Price</span>&nbsp;:&nbsp;₹{roomData.price}</div>
  <div className="hotelDetailsTexts"><span>Capacity</span>&nbsp;:&nbsp;{roomData.capacity}</div>
  {user?( <div className='reserveButton'><button className="selectRoomBtn" id={roomData._id} value={roomData.price} onClick={handleSelectedRoom}>{roomToBook.includes(roomData._id)?('Selected'):('Select Room')}</button>{roomToBook.includes(roomData._id)&&<button className="removeRoomBtn" id={roomData._id} value={roomData.price} onClick={hanldeRemoveRoom}>Remove</button>}</div>
  ):(<>
  <div className='reserveButton'><button className="removeRoomBtn">Login To Book</button></div>
  </>)
      }
  </div>
</div>

        </>
      );
    })
      )
      }
      </div>
      {
  roomToBook.length>0&&(
    <Wishlist data={{price:roomPrice,room:roomToBook,user:user._id,from_date:dates[0][0],to_date:dates[0][1]}}/>
  )
}
</div>   
    </>))
}



{
showImageCarousel&&(
  <>
  <div className="showImage">
  <img class="card-img-top" src={`${showImageCarousel}`} alt="Card"/>
  <button className='CloseBtnImage' onClick={()=>setShowImageCarousel(false)}>< FontAwesomeIcon icon={faXmark} /></button>
  </div>
  </>
)}
</div>
</>
    );
  }
export default Hotel;

