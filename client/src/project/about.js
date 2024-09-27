import React from 'react';
import './about.css';
import image5 from '../Image/countries.jpg';
import image4 from '../Image/cities.jpg';
function About()
{
    return(
<div class="aboutContainer">
    <div className='HeadingAboutContainer'>
          <p className='headingAbout'>Who <span style={{color:"rgb(242, 75, 103)"}}> We Are!</span></p>
      </div>

       <div className='mainAbout'>

       <div className='about'>
            <div className='aboutImageContainer'>
                  <img src={image4} alt='country'/>
            </div>
            <div className='aboutTextContainer'>
                   <p className='aboutText'>20+</p>
                   <p className='abouteSecondryText'>Indian Cities</p>
            </div>
       </div>
        <div className='about'>
            <div className='aboutTextContainer'>
                <p className='aboutText'>10+</p>
                <p className='abouteSecondryText'>Countries</p>
            </div>
            <div className='aboutImageContainer'>
                 <img src={image5} alt='cities'/>
            </div>
        </div>

      </div>
</div>
    )
}
export default About;