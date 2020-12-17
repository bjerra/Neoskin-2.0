import React, { useState } from 'react';
import { bool } from 'prop-types';
import { Link } from 'gatsby'
import { StyledMenu } from './Menu.styled';
import { useTheme  } from '@emotion/react'
import {default as Logo} from "../../logo";
import { FaPhoneSquare } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { ImLocation } from 'react-icons/im';
import { MdExpandLess, MdExpandMore } from 'react-icons/md';

const Menu = ({ open }) => {
  const [servicesExpanded, setservicesExpanded] = useState(false);
  const theme = useTheme()
  return (
    <StyledMenu theme={theme} open={open} servicesExpanded={servicesExpanded}> 
      <section>
        <Logo />
      </section>
      <section>
        <ul>                
            <li>
              <a href="tel:+46722065222" title="+46722065222">
                <FaPhoneSquare size={25}/>            
              </a>
            </li>
            <li>
              <a href="mailto:anais@neoskin.se" title="anais@neoskin.se">
                <HiOutlineMail size={25}/>          
              </a> 
            </li>
            <li>
              <a rel="nofollow noopener noreferrer external" href="https://www.google.com/maps/search/?api=1&amp;query=57.7815209,14.1746004" target="_blank">
                <ImLocation size={25}/>     
              </a>   
            </li>    
        </ul>
      </section>  
      <section>
      <div>
        <Link to="/om">
          Om
        </Link>  
      </div>        
      <div className="expandable" onClick={() => setservicesExpanded(!servicesExpanded)}>
        <div>
          <Link to="/behandlingar">
            Behandlingar
          </Link> 
          {servicesExpanded
          ? <MdExpandLess size={35}/> 
          : <MdExpandMore size={35}/>   
          }
        </div>
        <div id="service-menu">
        <ul>                
              <li>
              <Link to="/om">
            Om
          </Link>  
              </li>
              <li>
              <Link to="/om">
            Om
          </Link>  
              </li>
              <li>
              <Link to="/om">
            Om
          </Link>   
              </li>    
          </ul>
          </div>            
      </div>                 
      <div>
        <Link to="/nyhetsbrev">
          Nyhetsbrev
        </Link> 
      </div>  
     
      <div>
        <Link to="/kontakt">
          Kontakt
        </Link>
      </div>  
        

      </section>
     
    </StyledMenu>
  )
}
Menu.propTypes = {
  open: bool.isRequired,
}
export default Menu;