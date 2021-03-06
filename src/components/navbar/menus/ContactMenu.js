import React from 'react';

import {AiOutlineMail, AiOutlineInstagram, AiOutlinePhone, AiOutlineEnvironment} from 'react-icons/ai';

const ContactMenu = () => {

  return (
    <React.Fragment >  
      <div className="item">
       <a rel="nofollow noopener noreferrer external" href="http://maps.google.com/?q=Neoskin,+Smedjegatan+38,+553+20+Jönköping" target="_blank">
                <AiOutlineEnvironment size={20}/>   
                <div style={{width: '5px'}}></div>
                    Hitta hit
        </a> 
      </div>
      <div className="item">
         <a href="tel:+46722065222" title="+46722065222">
                <AiOutlinePhone size={20}/>    
                <div style={{width: '5px'}}></div>
                  Ring          
          </a>
      </div>
      <div className="item">
      <a href="mailto:anais@neoskin.se" title="anais@neoskin.se">
                  <AiOutlineMail size={20}/>   
                  <div style={{width: '5px'}}></div>
                    Skicka ett mail
        </a> 
      </div>

      <div className="item">
      <a href="https://instagram.com/neoskin.se" target="_blank" rel="noopener noreferrer" title="neoskin.se@Instagram">
          
      <AiOutlineInstagram size={20}/>   
                  <div style={{width: '5px'}}></div>
                  Följ oss på Instagram
                  
                </a>  
      </div>
      
 
      
    </React.Fragment>
  )
}

export default ContactMenu;