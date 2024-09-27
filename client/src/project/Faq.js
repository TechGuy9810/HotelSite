import React from 'react'
import './Faq.css'
const Faq = () => {
  return (
    <>
    <div className='FaqContainerMain'>
        <div className='FaqContainer'>
            <p className='FaqHeading'>Frequently Asked Question ?</p>
        </div>
        </div>
        <div className="accordion accordion-flush" id="accordionFlushExample" >
  <div className="accordion-item">
    <h2 className="accordion-header" id="flush-headingOne">
      <button className="accordion-button collapsed" style={{fontWeight:"bold"}}  type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
      What types of accommodations can I book?
      </button>
    </h2>
    <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body"><p>You can book a variety of accommodations, including luxury hotels, budget hotels, boutique hotels, resorts, and bed and breakfast establishments.</p></div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="flush-headingTwo">
      <button className="accordion-button collapsed" style={{fontWeight:"bold"}}  type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
      How many travel packages does This Reservation Site offer?
      </button>
    </h2>
    <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body"><p>We offer over 500 travel packages that cater to different interests and destinations. These packages can be customized based on your preferences.</p></div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="flush-headingThree">
      <button className="accordion-button collapsed" style={{fontWeight:"bold"}} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
      How can I pay for my booking?
      </button>
    </h2>
    <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body"><p>We accept various payment methods, including credit/debit cards, PayPal, and bank transfers.</p></div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="flush-headingFour">
      <button className="accordion-button collapsed" style={{fontWeight:"bold"}}  type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
      Can I make changes to my booking after confirmation?
      </button>
    </h2>
    <div id="flush-collapseFour" className="accordion-collapse collapse" aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body"><p>No, you cant modify your booking, subject to the hotel's policies. Please visit the "Manage Booking" section on our website or contact our customer support for assistance.</p></div>
    </div>
  </div>
</div>
</>
  )
}

export default Faq
