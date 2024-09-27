import React, { useContext, useEffect, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import './header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark, faHome, faInfo, faMoneyBill, faCircleUser, faHeart} from '@fortawesome/free-solid-svg-icons';
import { AuthContext } from '../context/authContext';
import Signup from '../project/signin';
import Signin from '../project/signup.js';
// header component.
function Header()
{
    const [login,setLogin] = useState(false);
    const [signup,setSignup] = useState(false);
    const handleSignup = ()=>{
      setLogin(false);
      setSignup(true);
  }
  const handlelogin = ()=>{
    setLogin(true);
    setSignup(false);
  }
    const menuRef = useRef();
    const {user,dispatch} = useContext(AuthContext);
    const [displayMenu,setDisplayMenu] = useState(false);
    const [hideMenu,setHideMenu] = useState("-100%");

    // function for Hiding menu if user not logged in
    const handleClick=()=>{
        setHideMenu("-100%");
        dispatch({type:"LOGOUT"});
    }
    // automatic close of menu if clicked outside
    useEffect(()=>{
        let handler =(e)=>{
            if(user&&!menuRef.current.contains(e.target))
            {
                setDisplayMenu(false);
            }
        };
        document.addEventListener("mousedown",handler);
        return()=>{
                document.removeEventListener("mousedown",handler);
        }
    });
    return ( <>
    <nav class="main-nav-cont">
        <ul class='nav-bar'>
            <li class='brand-name'><NavLink to="/" style={{textDecoration:"none"}}><p>Lu<span style={{color:'rgb(242, 75, 103)'}} class="xcom">X</span>ry</p></NavLink> </li>
            
            <span class="menu" style={{right:`${hideMenu}`}}>
            <li onClick={()=>setHideMenu("-100%")}><NavLink to="/"><FontAwesomeIcon icon={faHome}/>&nbsp;Home</NavLink></li>
            <li onClick={()=>setHideMenu("-100%")}><NavLink to="/about"><FontAwesomeIcon icon={faInfo} />&nbsp;About</NavLink></li>
            {user?(<li className='Bookings' onClick={()=>setHideMenu("-100%")}><NavLink to="/bookings"><FontAwesomeIcon icon={faMoneyBill}/>&nbsp;Bookings</NavLink></li>):('')}
            {user?(<li className='Bookings' onClick={()=>setHideMenu("-100%")}><NavLink to="/likedHotel"><FontAwesomeIcon icon={faHeart}/></NavLink></li>):('')}
            {user?(<li className='username' ref={menuRef}><FontAwesomeIcon onClick={()=>setDisplayMenu(!displayMenu)} icon={faCircleUser} style={{color:"black"}} className='avatarIcon'/>
            {displayMenu&&<div className='AvatarMenu'>
                <div className='AvatarName'><p>{user.name}</p></div>
                <div className='UpdateAvatar'><button className='UpdateProfileBtn'>Profile</button></div>
                <div className='LogoutBtn'>{user? (<button onClick={handleClick} id='logoutBtn' style={{cursor:'pointer'}}>Logout</button>) :('')}</div>
            </div>}</li>):('')}
            {user? (<li id='lg-screen'><p onClick={handleClick} id='logouticon' style={{cursor:'pointer'}}>Logout</p></li>) :(<li className='login' id='LoginTab'><p onClick={()=>{ handlelogin()
                setHideMenu("-100%")}}>Login</p></li>)}
                <label onClick={()=>{setHideMenu("-100%")}} class="close-menu"><FontAwesomeIcon icon={faXmark} style={{fontSize:'5vw'}} /></label>
            </span>
            
            <label onClick={()=>{setHideMenu("0");}} class="open-menu"><FontAwesomeIcon icon={faBars} style={{fontSize:'5vw'}}/></label>
        </ul>
    </nav>
    {!user && login&&(
      <>
      <FontAwesomeIcon onClick={()=>setLogin(false)} className='CloseBtnLogin' icon={faXmark}/>
      <Signin/>
      <p className='DontHaveAccountLink' onClick={handleSignup}>Create an Account</p>
      </>
  )}
  {/* fucntion to open login contiainer */}
  {!user && signup&&(
      <>
      <FontAwesomeIcon className='CloseBtnSignup' onClick={()=>setSignup(false)} icon={faXmark}/>
      <Signup/>
      <p className='HaveAccountLink' onClick={handlelogin}>Already have an account</p>
      </>
  )}
</>) ;
}
export default Header;