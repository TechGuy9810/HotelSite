import React from 'react';
import './footer.css';
import { Link } from 'react-router-dom';
import {faFacebook, faInstagram, faTwitter, faYoutube,} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.bundle.min";
function Footer()
{
    return(
        <>
        <div class="footer-main">
          <div class="footer">
            <div class="Row1">
              <div class="brand-logo">
              <div class="brand-logo-div">
             <p>Lu<span style={{color:'rgb(242, 75, 103)'}}>X</span>ry</p>
        </div>
              </div>
              <div class="social-media">
                <div class="social-media-div">
                  <ul>
                    <li><Link><FontAwesomeIcon icon={faInstagram} /></Link></li>
                    <li><Link><FontAwesomeIcon icon={faTwitter} /></Link></li>
                    <li><Link><FontAwesomeIcon icon={faYoutube} /></Link></li>
                    <li><Link><FontAwesomeIcon icon={faFacebook} /></Link></li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="Row2">
              <div class="Col1"><ul>
                <li><Link>Job</Link></li>
                <li><Link>Partners</Link></li>
                <li><Link>company</Link></li>
                <li><Link>Investor Relation</Link></li>
                <li><Link>Press</Link></li>
                <li><Link>Mobile App</Link></li>
                </ul></div>
              <div class="Col2"><ul>
                <li><Link>Privacy</Link></li>
                <li><Link>Cyber Security</Link></li>
                <li><Link>Notices</Link></li>
                <li><Link>New Ventures</Link></li>
                <li><Link>Terms and Condition</Link></li>
                <li><Link>Legal Information</Link></li>
                </ul></div>
              <div class="Col3">
                <div class="Col3-div1">
                  <p>Want to receive exclusive accommodation offers? Subscribe to our newsletter.</p>
                </div>
                <div class="Col3-div2">
                  <div class="Col3-div2-div1"><input placeholder='Email Address' class="inputEmail"></input></div>
                   <div class="Col3-div2-div2"><button>Subscribe</button></div>
                </div>
              </div>
            </div>
            <div class="Row3">
              <p>Copyright 2023 LuXry | All rights reserved.</p>
            </div>
          </div>
        </div>
        </>
    );
}
export default Footer;