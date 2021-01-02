import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'gatsby'
import { StyledMobile } from './MobileNavbar.styled';
import DropDown from '../dropdown/Dropdown'
import { useTheme  } from '@emotion/react'
import { BiHomeHeart, BiNews, BiHappy, BiGroup, BiUpArrow } from 'react-icons/bi';


const Navbar = props => {
    const [expanded, setExpanded] = useState(false);
    const theme = useTheme()
    return(
      <StyledMobile theme={theme} expanded={expanded}> 
      <div className="row">
            <Link to="/">
                <BiHomeHeart size={20}/>  
                Hem
            </Link> 
            <Link to="/kontakt">
            <BiNews size={20}/>  
                Kontakt
            </Link>
            <DropDown title={"Behandlingar"}/>
           
            <div id="more" onClick={() => setExpanded(!expanded)}>
                <BiUpArrow size={20}/> 
                {expanded ? "Mindre" : "Mer"}
            </div>
      </div>
      <div className="row">
            <Link to="/om">
                <BiHappy size={20}/> 
                Om
            </Link>  
            <Link to="/nyhetsbrev">
                <BiGroup size={20}/> 
                Nyhetsbrev
            </Link>  
      </div>          
      </StyledMobile> 
    )
  }

export default Navbar