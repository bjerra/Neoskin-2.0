import React from 'react';
import { Wrapper } from './Navbar.styled';
import { useTheme  } from '@emotion/react'
import Mobilenavbar from './mobile/MobileNavbar'
import DesktopNavbar from './dekstop/DesktopNavbar'
import { useMediaQuery } from 'react-responsive'

const Navbar = props => {

  const theme = useTheme();

  const isDesktop = useMediaQuery({ minWidth: 992 })
  const isTouch = useMediaQuery({ maxWidth: 991 })
    return (     
      <Wrapper theme={theme}>
        {isDesktop && <DesktopNavbar />}
        {isTouch && <Mobilenavbar />}
      </Wrapper>      
    )    
  }

export default Navbar
