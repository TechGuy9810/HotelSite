import React, { useContext, useState } from "react";
import './details.css';
import { useNavigate } from "react-router-dom";
import { DatePicker } from 'antd';
import { SearchContext } from '../context/searchContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHotel,faCalendar } from '@fortawesome/free-solid-svg-icons';
import toast from 'react-hot-toast';
const { RangePicker } = DatePicker;


const Details = (props) => {
    const navigate = useNavigate();
    let destination = props.Data.destination;
    let country = props.Data.country;
    const {dispatch} = useContext(SearchContext);
    const [dates,setDates] = useState([
       ]);
    const [options, setOptions] = useState({
        adult: 1,
        children: 0,
        room: 1
      });
 const handleOption = (name, operation) => {
        setOptions((prev) => {
          return {
            ...prev, [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
          };
        });
      };
const handleClick = async ()=>{
        if(dates.length!==0)
        {
            dispatch({type:"NEW_SEARCH",payload:{destination,country,dates,options}});
            navigate('/list');
        }
        else{
          toast.error('Please Select a Date');
        }
    }
const filterByDate = async(d)=> {
        setDates([d]);
    }
  return (
<div className="MainContainer">
    <div className="Container">
    <div className="HeadingContainer "><h1 className="Heading">Fill Details</h1></div>

    <div className="Dates">
        <div className="Dates-logo">
        <FontAwesomeIcon icon={faCalendar} style={{ color: "rgb(242, 75, 103)" }} />
        </div>
        <RangePicker format='DD-MM-YYYY' style={{ height: "100%", width: "100%", border: 'none',zIndex:'99999' }} onChange={filterByDate}/>
    </div>
  
    <div class="Person-rooms">
        <div class="logo-rooms">
          <FontAwesomeIcon icon={faHotel} style={{ color: "rgb(242, 75, 103)" }} />
        </div>
         <div className='person-room-options'>
            <div className='optionItem'>
              <span className='optionsText'>Adult</span>
              <div className='optionCounter'>
                <button className='optionCouterButton' onClick={() => handleOption("adult", "d")} disabled={options.adult <= 1}>-</button>
                <button className='optionCouterNumber'>{options.adult}</button>
                <button className='optionCouterButton' onClick={() => handleOption("adult", "i")}>+</button>
              </div>
            </div>
            <div className='optionItem'>
              <span className='optionsText'>Children</span>
              <div className='optionCounter'>
                <button className='optionCouterButton' onClick={() => handleOption("children", "d")} disabled={options.children <= 0}>-</button>
                <button className='optionCouterNumber'>{options.children}</button>
                <button className='optionCouterButton' onClick={() => handleOption("children", "i")}>+</button>
              </div>
            </div>
            <div className='optionItem'>
              <span className='optionsText'>Room</span>
              <div className='optionCounter'>
                <button className='optionCouterButton' onClick={() => handleOption("room", "d")} disabled={options.room <= 1}>-</button>
                <button className='optionCouterNumber'>{options.room}</button>
                <button className='optionCouterButton' onClick={() => handleOption("room", "i")}>+</button>
              </div>
            </div>
          </div>
      </div>
      <div className="ProcessFurther"><button onClick={handleClick} disabled={(dates.length!==0)?false:true}>Process</button></div>
</div>
</div>
  )
}

export default Details
