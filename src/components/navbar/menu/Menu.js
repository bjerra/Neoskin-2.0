import React from 'react';
import { bool } from 'prop-types';
import { Link } from 'gatsby'
import { StyledMenu } from './Menu.styled';
import { useTheme  } from '@emotion/react'
import {default as Logo} from "../../logo";
import { FaPhoneSquare } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { ImLocation } from 'react-icons/im';

const Menu = ({ open }) => {
  const theme = useTheme()
  return (
    <StyledMenu theme={theme} open={open}> 
      <div id="logo">
        <Logo />
      </div>
      <div id="contact">
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
      </div>  
      <div id="links">
      <Link to="/om">
        Om
      </Link>                                        
      <Link to="/behandlingar">
        Behandlingar
      </Link>   
      <Link to="/nyhetsbrev">
        Nyhetsbrev
      </Link> 
      <Link to="/kontakt">
        Kontakt
      </Link>   

      </div>
     
    </StyledMenu>
  )
}
Menu.propTypes = {
  open: bool.isRequired,
}
export default Menu;