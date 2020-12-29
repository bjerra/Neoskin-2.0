import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'gatsby'
import { StyledMobile } from './MobileNavbar.styled';
import { Button, Expandable } from '../buttons'
import DropDown from '../dropdown/Dropdown'
import Menu from '../menu/Menu'
import { useTheme  } from '@emotion/react'


const Navbar = props => {
    const [servicesExpanded, setservicesExpanded] = useState(false);
    const theme = useTheme()
    return(
      <StyledMobile theme={theme} > 
            <Button title="Hem" to="/"/>
            <DropDown title={"Behandlingar"}/>
            <Button title="Kontakt" to="/kontakt"/>
            <Button title="Mer" />
            <Menu open={servicesExpanded} />
      </StyledMobile> 
    )
  }

export default Navbar