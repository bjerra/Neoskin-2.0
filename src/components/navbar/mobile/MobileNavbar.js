import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'gatsby'
import { StyledMobile } from './MobileNavbar.styled';
import { Button, Expandable } from '../buttons'
import Menu from '../menu/Menu'
import { useTheme  } from '@emotion/react'


const Navbar = props => {
    const [servicesExpanded, setservicesExpanded] = useState(false);
    return(
      <StyledMobile> 
            <Button title="Hem" to="/"/>
            <Expandable title="Behandlingar" expanded={servicesExpanded} onClick={() => setservicesExpanded(!servicesExpanded)}/>
            <Button title="Kontakt" to="/kontakt"/>
            <Button title="Mer" />
            <Menu open={servicesExpanded} />
      </StyledMobile> 
    )
  }

export default Navbar