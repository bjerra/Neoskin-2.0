import React, { useState, useRef } from 'react';
import {default as Burger} from "./burger";
import {default as Menu} from "./menu";
import { useOnClickOutside } from '../../utils/hooks';
import { StyledNavbar } from './Navbar.styled';
import { useTheme  } from '@emotion/react'
import { FaPhoneSquare } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { ImLocation } from 'react-icons/im';


const Navbar = props => {
    const theme = useTheme()
    const [open, setOpen] = useState(false);
    const node = useRef(); 
    useOnClickOutside(node, () => setOpen(false));

    return (     
          <StyledNavbar theme={theme} >  
          <div>
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
            <div>
            <div ref={node}>
              <Burger open={open} setOpen={setOpen} />
              <Menu open={open} setOpen={setOpen} />
            </div>     
          </div>       
          </StyledNavbar>         
    )    
  }

export default Navbar
