import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'gatsby'
import { StyledMobile } from './MobileNavbar.styled';
import { Button, Expandable } from '../buttons'
import DropDown from '../dropdown/Dropdown'
import Menu from '../menu/Menu'
import { useTheme  } from '@emotion/react'


const Navbar = props => {
    const [expanded, setExpanded] = useState(false);
    const theme = useTheme()
    return(
      <StyledMobile theme={theme} expanded={expanded}> 
      <div className="row">
            <Button title="Hem" to="/"/>
            <DropDown title={"Behandlingar"}/>
            <Button title="Kontakt" to="/kontakt"/>
            <button onClick={() => setExpanded(!expanded)}>
                Mer
            </button>
      </div>
      <div className="row">
            <Button title="Om" to="/om"/>  
            <Button title="Nyhetsbrev" to="/nyhetsbrev"/>
      </div>          
      </StyledMobile> 
    )
  }

export default Navbar