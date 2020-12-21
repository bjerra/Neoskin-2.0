import React, { useState, useRef } from 'react';
import {default as Burger} from "./burger";
import {default as Menu} from "./menu";
import { useOnClickOutside } from '../../utils/hooks';
import { StyledNavbar } from './Navbar.styled';
import { useTheme  } from '@emotion/react'



const Navbar = props => {
    const theme = useTheme()
    const [open, setOpen] = useState(false);
    const node = useRef(); 
    useOnClickOutside(node, () => setOpen(false));
    return (     
          <StyledNavbar theme={theme} >  
         
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
