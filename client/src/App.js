import {Route,Routes} from 'react-router-dom';
import { Suspense, lazy} from 'react';
// import { useState,useContext } from 'react';
// import { AuthContext } from './context/authContext.js';
// import Signup from './project/signin.js';
// import Signin from './project/signup.js';
import Home from "./project/home.jsx";
import Featured from './project/featured.js';
import ForigenDestination from './project/ForigenDestination.js';
import EmailVerify from './project/EmailVerify.jsx';
const SearchBar = lazy(()=>import("./project/searchBar.js"));
const About = lazy(()=>import("./project/about.js"));
const Hotel = lazy(()=> import("./project/hotel.jsx"));
const Bookings = lazy(()=>import("./project/bookings.js"));
const List = lazy(()=>import("./project/list.jsx"));
const LikedHotel = lazy(()=>import("./project/likedHotel.js"));
function App() {
//   const [login,setLogin] = useState(true);
//   const [signup,setSignup] = useState(false);
//   const {user} = useContext(AuthContext);
//   const handleSignup = ()=>{
//     setLogin(false);
//     setSignup(true);
// }
// const handlelogin = ()=>{
//   setLogin(true);
//   setSignup(false);
// }
  return (<>
              <Routes>
                <Route path='/bookings' exact element={
                <Suspense fallback={<div style={{display:"flex", alignItems:"center",justifyContent:"center",height:"100vh", width:"100%"}} >loading...</div>}>
                  <Bookings/>
                </Suspense>}/>
                <Route path='/' exact element={
                <Home/>
                }/>
                <Route path='/hotel/:id' exact element={
                <Suspense fallback={<div style={{display:"flex", alignItems:"center",justifyContent:"center",height:"100vh", width:"100%"}} >loading...</div>}>
                <Hotel/>
                </Suspense>}/>
                <Route path='/list' exact element={
                <Suspense fallback={<div style={{display:"flex", alignItems:"center",justifyContent:"center",height:"100vh", width:"100%"}} >loading...</div>}>
                <List/>
                </Suspense>}/>
                <Route path="/searchBar" exact element={
                <Suspense fallback={<div style={{display:"flex", alignItems:"center",justifyContent:"center",height:"100vh", width:"100%"}} >loading...</div>}>
                <SearchBar/>
                </Suspense>}/>
                <Route path='/about' exact element={
                <Suspense fallback={<div style={{display:"flex", alignItems:"center",justifyContent:"center",height:"100vh", width:"100%"}} >loading...</div>}>
                <About/>
                </Suspense>}/>
                <Route path='/featured' exact element={
                <Featured/>}/>
                <Route path='/auth/:id/verifyUser/:token' exact element={<EmailVerify/>}/>
                <Route path='/country' exact element={
                <ForigenDestination/>
                }/>
                <Route path='/likedHotel' exact element={
                <Suspense fallback={<div style={{display:"flex", alignItems:"center",justifyContent:"center",height:"100vh", width:"100%"}}>loading...</div>}>
                <LikedHotel/>
                </Suspense>}/>
              </Routes>
              {/* function to open signup contianer */}
    {/* {!user && login&&(
      <>
      <Signin/>
      <p className='DontHaveAccountLink' onClick={handleSignup}>Create an Account</p>
      </>
  )} */}
  {/* fucntion to open login contiainer */}
  {/* {!user && signup&&(
      <>
      <Signup/>
      <p className='HaveAccountLink' onClick={handlelogin}>Already have an account</p>
      </>
  )} */}
 </> );
}

export default App;
