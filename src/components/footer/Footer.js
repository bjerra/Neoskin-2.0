import React from 'react'
import {StyledFooter} from './Footer.styled'
import { FaPhoneSquare } from 'react-icons/fa';
import { SiFacebook, SiInstagram } from 'react-icons/si';
import { HiOutlineMail } from 'react-icons/hi';
import { ImLocation } from 'react-icons/im';


const Footer = class extends React.Component {
  render() {
    return (
      <StyledFooter>       
        <div className="content has-text-centered">
          
          <div className="container">

            <div className="columns is-centered" style={{marginRight: 0, marginLeft: 0}}>
                  
              <div className="column is-3">
                <section className="menu">
                  <ul className="menu-list" style={{margin: '0 1rem'}}>                
                    <li>
                    <a href="tel:+46722065222" title="+46722065222">
                    <FaPhoneSquare />    
                    <p className="contact-text">
                      072-2065222     
                    </p>
                          
                </a>
            </li>
             <li>
             <a href="mailto:anais@neoskin.se" title="anais@neoskin.se">
             <HiOutlineMail />   
             <p className="contact-text">
             anais@neoskin.se    
                    </p>
             
                  
              </a> 
             </li>
             <li>
                    <a rel="nofollow noopener noreferrer external" href="https://www.google.com/maps/search/?api=1&amp;query=57.7815209,14.1746004" target="_blank">
                    <ImLocation />     
                    <p className="contact-text">
                      Smedjegatan <br/> 38 553 20<br/> 
                      Jönköping City  
                      </p>
                    </a>   
                    </li>    
                  </ul>
                </section>
              </div>        
              <div className="column is-3 social">
                <a href="https://www.facebook.com/neoskin.se/" target="_blank" rel="noopener noreferrer" title="neoskin.se@facebook">
                <SiFacebook />
                </a>       
                <a href="https://instagram.com/neoskin.se" target="_blank" rel="noopener noreferrer" title="neoskin.se@Instagram">
                <SiInstagram />
                </a>       
                         
              </div>
              
            </div>
            
            <div className="columns" style={{display: "flex", margin: 0}}>
             
           
          <div className="column">
          <a                        
                        href="/admin/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                         <p className="contact-text">
                         Admin
                          </p>
                        
                      </a>
          </div>
        </div>
           
          </div>
                     
        </div>
       

        </StyledFooter>
    )
  }
}

export default Footer
