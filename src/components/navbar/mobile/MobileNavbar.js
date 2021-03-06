import React, { useRef, useState } from 'react';
import { Link } from 'gatsby'
import { StyledMobile } from './MobileNavbar.styled';
import DropDown from '../dropdown/Dropdown'
import { useTheme  } from '@emotion/react'
import { BiHomeHeart, BiNews, BiDotsVertical } from 'react-icons/bi';
import { FaHandHoldingHeart } from 'react-icons/fa';
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
                <BiHomeHeart size={25}/>  
                Hem
            </Link> 
          
            <DropDown open={dropDownOpen === "Kontakt"} content={<ContactMenu />} setOpen={() => setDropDownOpen(dropDownOpen === "Kontakt" ? "": "Kontakt")}>
              <BiNews size={25}/> 
              Kontakt
            </DropDown>


            <DropDown open={dropDownOpen === "Behandlingar"} content={<ServiceMenu />} setOpen={() => setDropDownOpen(dropDownOpen === "Behandlingar" ? "": "Behandlingar")}>
              <FaHandHoldingHeart size={25}/> 
              Behandlingar
            </DropDown>

            <DropDown open={dropDownOpen === "Mer"} content={<MoreMenu />} setOpen={() => setDropDownOpen(dropDownOpen === "Mer" ? "": "Mer")}>
              <BiDotsVertical size={25}/> 
              Mer
            </DropDown>

      </StyledMobile> 
    )
  }

export default Navbar