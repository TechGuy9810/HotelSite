import React from 'react'
import './Map.css';

// This is a map component.
const Map = () => {
  return (
    <div class="Maplanding">
    <iframe className='mapImage' title='mapImage' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56045.61030644653!2d77.00653195381166!3d28.60425711840194!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1b1150576417%3A0xc4c562c80eea4d73!2sHotel%20Pingla%20Residency!5e0!3m2!1sen!2sin!4v1721309639481!5m2!1sen!2sin" allowFullscreen="" Loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
    </div>
  )
}

export default Map
