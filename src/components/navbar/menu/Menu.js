import React from 'react';
import { bool } from 'prop-types';
import { Link } from 'gatsby'
import { StyledMenu } from './Menu.styled';
import { useTheme  } from '@emotion/react'

const Menu = ({ open }) => {
  const theme = useTheme()
  return (
    <StyledMenu theme={theme} open={open}>
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
    </StyledMenu>
  )
}
Menu.propTypes = {
  open: bool.isRequired,
}
export default Menu;