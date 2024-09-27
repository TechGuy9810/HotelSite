import React, { useState } from 'react'
import './Wishlist.css';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import toast from 'react-hot-toast';
const Wishlist = ({data}) => {
  const navigate = useNavigate();
  const [amount, setAmount] = useState(10);

  // handlePayment Function
  
  const handlePayment = async () => {
        setAmount(10);
      try {
         const res = await axios.post("/orders/order",{amount});
          const data = await res.data.data;
          handlePaymentVerify(data)
      } catch (error) {
          toast.error(error);
      }
  }
  // handlePaymentVerify Function
  const handlePaymentVerify = async (data) => {
      const options = {
          key:"",
          key_screet:"",
          amount: data.amount,
          currency: data.currency,
          name: "Abhishek Singh",
          description: "Test Mode",
          handler: async () => {
              try {
                  await axios.post("/orders/payment",{razorpay_payment_id:"",razorpay_signature:""});
              } catch (error) {
                  toast.error("Error");
              }
          },
          prefill: {
            email: "Rahul@example.com",
            contact: "9999999999",
        },
          theme: {
              color: "#5f63b8"
          }
      };
     
      const rzp1 = new window.Razorpay(options);
      rzp1.on("payment.failed", function (response) {
        alert(response.error.description);
      });
      proceedToBook();
      rzp1.open();
  }
    const proceedToBook = async()=>{
       try{
           await data.room.map((d)=>axios.post(`/booking/book/`,{room:d,user:data.user,start:data.from_date,end:data.to_date}));
       }catch(error)
       {
         toast.error(error.message);
         navigate('/');  
       }
    }
  return (
      <div className='Wish'>
             <div className='NumberOfHotelRoom'>
  <p className='HotelRoomNumber'>{data.room.length}</p>
   <p className='NumberOfHotelRoomHeading'>
    {(data.room.length>1)?('Rooms'):('Room')}
   </p>

  </div>
             <div className='HotelRoomContainer'>
             <p className='price'>
             ₹&nbsp;{data.price}/
   </p>

             <button className='HotelBtn' onClick={handlePayment}>Book</button>
             </div>
      </div>
  )
}

export default Wishlist
