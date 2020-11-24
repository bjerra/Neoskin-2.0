import React from 'react';
import { bool } from 'prop-types';
import { Link } from 'gatsby'
import { StyledMenu } from './Menu.styled';
import { useTheme  } from '@emotion/react'
import {default as Logo} from "../../logo";

const Menu = ({ open }) => {
  const theme = useTheme()
  return (
    <StyledMenu theme={theme} open={open}>
      <div>
        <Logo />
      </div>
      <section>
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

      </section>
     
    </StyledMenu>
  )
}
Menu.propTypes = {
  open: bool.isRequired,
}
export default Menu;