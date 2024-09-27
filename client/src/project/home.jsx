import React from "react";
import Featured from "./featured";
import ForigenDestination from './ForigenDestination.js';
import CarouselDefault from "./Carousel.jsx";
import Faq from "./Faq";
//home component.
const Home = ()=>{
return(
    <>
<div class="body">
<div class="landing">
<CarouselDefault/>
<Featured/>
<ForigenDestination/>
<Faq/>
</div>
</div>
    </>
);
}
export default Home;