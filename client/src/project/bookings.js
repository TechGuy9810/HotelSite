import React, { useContext, useState ,useMemo} from 'react';
import './bookings.css';
import { AuthContext } from '../context/authContext';
import axios from 'axios';
import toast from 'react-hot-toast';
import moment from "moment";
import img from '../Image/booked.png';
import ClipLoader from 'react-spinners/ClipLoader';
const Bookings=()=>
{
    const {user} = useContext(AuthContext);  
    const[bookingData,setBookingData] = useState([]);
    const [loading, setLoading] = useState(false);
    useMemo(() => {
      const fetchData = async () => {
        setLoading(true);
        try {
          const res = await axios.get(`booking/getBooking/${user._id}`);
          setBookingData(res.data);
        } catch (err) {
          toast.error("Unexpected Error");
        }
        setLoading(false);
      };
      fetchData();
    }, [user._id]);

    //cancel Room Booking
    const handleClick = async(e)=>{
      try{
        const bookingId = e.target.id;
        const res = await axios.post(`booking/cancelBooking/`,{bookingId});
        if(res.status===200)
        {
          toast.success(res.data);
          window.location.reload(true);
        }
       }catch(err)
       {
        toast.error(err.data.message);
       }
    }
return( 
  <>
  <div class="body-booking">
  <div class="row" style={{gap:"2vw",margin:"auto"}}>
  {/* let obj = arr.find(o => o.name === 'string 1'); */}
  {loading? (<ClipLoader/>):((bookingData.length!==0)?(bookingData.map(item=>(
  <div class="card"id='CardHolder'>
    <div class="card-body" id='CardBody'>
      <div className='roomNumbersContainer'><p class="card-text" style={{fontWeight:"600"}}>Room:&nbsp;{item.room.roomNumber}</p>
      </div>
      <p class="card-text">
                <span style={{paddingRight:"1vw"}}>
                {moment(item.start).format('DD/MM/YYYY')}&nbsp;to&nbsp;
                {moment(item.end).format('DD/MM/YYYY')}
                </span>
      </p>
      <div class="col-sm-10" style={{gap:"1vw", display:"flex"}}>
      <button class="btn btn-danger" id={item._id} onClick={handleClick}>Cancel</button>
      </div>
  </div>
  <div className='cardBodyImage'>
    <img src={img} alt='carbody'></img>
  </div>
</div>
          ))):(
            <div class="mainNoBookingContainer">
              <p className='noBooking'>No Bookigns Yet!</p>
            </div>
          ))}
    </div>
  
  
    </div>
  </>
      );
}
export default Bookings;

