import React, { useRef, useState } from 'react';
import { Link } from 'gatsby'
import { Logo } from '../../../components'
import { StyledDesktop} from './DesktopNavbar.styled';
import { useTheme  } from '@emotion/react'
import DropDown from '../dropdown/Dropdown'
import ServiceMenu from '../menus/ServiceMenu'
import Information from '../menus/Information'
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
                <Logo size={5}/>
                </Link> 
            </div>
                 
                <div role = "button" tabIndex={0} onMouseEnter={() => setDropDownOpen("Information")}>
                <DropDown open={dropDownOpen === "Information"}  down={true} content={<Information />} setOpen={() => setDropDownOpen("Information")}>    
                  Info
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
                      </DropDown>    
                     
                </div>

                <div role = "button" tabIndex={0} onMouseEnter={() => setDropDownOpen("Mer")}>
                  <DropDown open={dropDownOpen === "Mer"}  down={true} content={<MoreMenu />} setOpen={() => setDropDownOpen("Mer")}>    
                    Mer
                  </DropDown>
                </div> 
      </StyledDesktop>   
    )
  }
  
export default Navbar

