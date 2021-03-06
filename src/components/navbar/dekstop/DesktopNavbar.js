import React, { useRef, useState } from 'react';
import { Link } from 'gatsby'
import {ExpandIcon } from '../../../components'
import { StyledDesktop} from './DesktopNavbar.styled';
import { useTheme  } from '@emotion/react'
import DropDown from '../dropdown/Dropdown'
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
      <StyledDesktop theme={theme} ref={node} onMouseLeave={() => setDropDownOpen("")}> 
            <div role = "button" tabIndex={0} onMouseEnter={() => setDropDownOpen("")}>
              <Link to="/">
                Hem
                </Link> 
            </div>
                 
                <div role = "button" tabIndex={0} onMouseEnter={() => setDropDownOpen("Kontakt")}>
                <DropDown open={dropDownOpen === "Kontakt"}  down={true} content={<ContactMenu />} setOpen={() => setDropDownOpen("Kontakt")}>    
                  Kontakt
                  <ExpandIcon expanded ={dropDownOpen === "Kontakt"}/>   
                </DropDown>
                </div>

                <div role = "button" tabIndex={0} onMouseEnter={() => setDropDownOpen("Behandlingar")}>
                    <DropDown     
                        open={dropDownOpen === "Behandlingar"} 
                        content={<ServiceMenu />}
                        setOpen={() => setDropDownOpen("Behandlingar")}
                        down={true}          
                    >
                      Behandlingar
                      <ExpandIcon expanded ={dropDownOpen === "Behandlingar"}/>   
                      </DropDown>    
                     
                </div>

                <div role = "button" tabIndex={0} onMouseEnter={() => setDropDownOpen("Mer")}>
                  <DropDown open={dropDownOpen === "Mer"}  down={true} content={<MoreMenu />} setOpen={() => setDropDownOpen("Mer")}>    
                    Mer
                    <ExpandIcon expanded ={dropDownOpen === "Mer"}/>   
                  </DropDown>
                </div> 
      </StyledDesktop>   
    )
  }
  
export default Navbar

