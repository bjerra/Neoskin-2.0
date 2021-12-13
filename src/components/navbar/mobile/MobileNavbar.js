import React, { useRef, useState } from 'react';
import { Link } from 'gatsby'
import { StyledMobile } from './MobileNavbar.styled';
import { Logo } from '../../../components'
import DropDown from '../dropdown/Dropdown'
import { useTheme  } from '@emotion/react'
import { BiDotsVertical } from 'react-icons/bi';
import ServiceMenu from '../menus/ServiceMenu'
import ContactMenu from '../menus/ContactMenu'
import MoreMenu from '../menus/MoreMenu'
import { useOnClickOutside } from '../../../utils/hooks';


const Navbar = props => {

    const [dropDownOpen, setDropDownOpen] = useState("");
    const theme = useTheme()
    const node = useRef(); 
    useOnClickOutside(node, () => setDropDownOpen(""));
    return(
      <StyledMobile theme={theme} ref={node}> 
            <Link to="/">
              <Logo size={5}/>
            </Link> 
          
            <DropDown open={dropDownOpen === "Kontakt"} content={<ContactMenu />} setOpen={() => setDropDownOpen(dropDownOpen === "Kontakt" ? "": "Kontakt")}>
             
              Kontakt
            </DropDown>


            <DropDown open={dropDownOpen === "Behandlingar"} content={<ServiceMenu />} setOpen={() => setDropDownOpen(dropDownOpen === "Behandlingar" ? "": "Behandlingar")}>
              
              Behandlingar
            </DropDown>

            <DropDown open={dropDownOpen === "Mer"} content={<MoreMenu />} setOpen={() => setDropDownOpen(dropDownOpen === "Mer" ? "": "Mer")}>
              <BiDotsVertical size={25}/>    
            </DropDown>

      </StyledMobile> 
    )
  }

export default Navbar