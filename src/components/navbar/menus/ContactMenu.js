import React from 'react';
import { Link } from 'gatsby'

import { FaPhoneSquare,FaMapMarkerAlt } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';

const ContactMenu = () => {

  return (
    <React.Fragment >  
      <div className="item">
      <a href="tel:+46722065222" title="+46722065222">
                <FaPhoneSquare size={20}/>    
                <div style={{width: '5px'}}></div>
                  Ring          
              </a>
      </div>
      <div className="item">
      <a className="item" href="mailto:anais@neoskin.se" title="anais@neoskin.se">
                  <HiOutlineMail size={20}/>   
                  <div style={{width: '5px'}}></div>
                    Maila
        </a> 
      </div>
  
      <div className="item">
        <a href="">
                <FaMapMarkerAlt size={20}/>   
                <div style={{width: '5px'}}></div>
                    Hitta
        </a> 
      </div>
    </React.Fragment>
  )
}

export default ContactMenu;