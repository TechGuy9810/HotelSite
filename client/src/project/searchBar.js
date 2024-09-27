import React, { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { useRef } from 'react';
import './searchBar.css';
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHotel, faCity, } from '@fortawesome/free-solid-svg-icons';
import { DatePicker } from 'antd';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useContext } from 'react';
import { SearchContext } from '../context/searchContext';
import toast from 'react-hot-toast';
const { RangePicker } = DatePicker;

// defined all cities user can select.
const SelectCityOptions = [{ label: "Mumbai", value: 1 }, { label: "New Delhi", value: 2 }, { label: "Kolkata" }];

// searech bar component.
function SearchBar() {
  const optionRef = useRef();
  const [destination, setDestination] = useState("Select");
  let country = "India";
  const [dates,setDates] = useState([
   {
    start: new Date(),
    end: new Date(),
    key:"selection",
  }
  ]);
  const [dateSelected,setDateSelected] = useState(false); 
  const navigate = useNavigate();
  function filterByDate(d) {
      setDates([d]);
      setDateSelected(true);
  }
  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1
  });
  const {dispatch} = useContext(SearchContext);
  const handleOption = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev, [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  };
  // to close the menu if click outside.
  useEffect(()=>{
    let handler =(e)=>{
        if(!optionRef.current.contains(e.target))
        {
            setOpenOptions(false);
        }
    };
    document.addEventListener("mousedown",handler);
    return()=>{
            document.removeEventListener("mousedown",handler);
    }
});
// to check if user selected all fields
  const handleSearch = () => {
    if(dateSelected===false)
    {
         toast.error("Please Fill Date");
    }
    else if(destination==='Selected')
    {
      toast.error("Please Fill Destination");
    }
    else{
      dispatch({type:"NEW_SEARCH",payload:{destination,country,dates,options}}); // to transfer the data to list component to list all hotels of the perfered search
      navigate('/list');
    }

  }
  return (<>
    <div class="main-row-search">
      <div class="main-col1">
        <div class="location-logo">
          <FontAwesomeIcon icon={faCity} style={{ color: "rgb(242, 75, 103)" }} />
        </div>
        <div class="location">
          <select className='form-select' onChange={e => setDestination(e.target.value)} style={{ border: "none" ,color:'#bfbfbf'}}>
          <option value="" disabled selected >Destination</option>
            {SelectCityOptions.map(option => (
              (option.label===destination)?(<option value="" disabled selected>{destination}</option>):(<option value={option.label}>{option.label}</option>)
            ))}
          </select>
        </div>
      </div>
      <div class="main-col2" onClick={() => setOpenOptions(!openOptions)} ref={optionRef}>
        <div class="rooms-logo">
          <FontAwesomeIcon icon={faHotel} style={{ color: "rgb(242, 75, 103)" }} />
        </div>
        <div class="rooms-select">
          <span style={{ border: "none" ,color:'#bfbfbf'}} className='headerSearchText'>{`${options.adult} adult . ${options.children} children . ${options.room} room`}</span>
          {openOptions && <div className='optionsContainer'>
            <div className='optionItem'>
              <span className='optionText'>Adult</span>
              <div className='optionCounter'>
                <button className='optionCouterButton' onClick={() => handleOption("adult", "d")} disabled={options.adult <= 1}>-</button>
                <button className='optionCouterNumber'>{options.adult}</button>
                <button className='optionCouterButton' onClick={() => handleOption("adult", "i")}>+</button>
              </div>
            </div>
            <div className='optionItem'>
              <span className='optionText'>Children</span>
              <div className='optionCounter'>
                <button className='optionCouterButton' onClick={() => handleOption("children", "d")} disabled={options.children <= 0}>-</button>
                <button className='optionCouterNumber'>{options.children}</button>
                <button className='optionCouterButton' onClick={() => handleOption("children", "i")}>+</button>
              </div>
            </div>
            <div className='optionItem'>
              <span className='optionText'>Room</span>
              <div className='optionCounter'>
                <button className='optionCouterButton' onClick={() => handleOption("room", "d")} disabled={options.room <= 1}>-</button>
                <button className='optionCouterNumber'>{options.room}</button>
                <button className='optionCouterButton' onClick={() => handleOption("room", "i")}>+</button>
              </div>
            </div>
          </div>}
        </div>
      </div>
      <div class="main-col3">
        <div class="date-select">
          <RangePicker format='DD-MM-YYYY' style={{ height: "100%", width: "100%", border: 'none' }} onChange={filterByDate}/>
        </div>
        <div class="search">
          <button class="search-button" onClick={handleSearch}>Check Now</button>
        </div>
      </div>
    </div>
  </>);
}
export default SearchBar;