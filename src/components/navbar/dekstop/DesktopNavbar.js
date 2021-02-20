import React, { useEffect, useRef, useState } from 'react';
import Menu from "../menu/Menu";
import { Link } from 'gatsby'
import {ExpandIcon} from '../../../components'
import { StyledDesktop, Primary , Secondary} from './DesktopNavbar.styled';
import { useTheme  } from '@emotion/react'
import DropDown from '../dropdown/Dropdown'
import ServiceMenu from '../menus/ServiceMenu'
import ContactMenu from '../menus/ContactMenu'
import MoreMenu from '../menus/MoreMenu'
import { useOnClickOutside } from '../../../utils/hooks';
import {BiChevronDown } from 'react-icons/bi';



const Navbar = props => {
    const [dropDownOpen, setDropDownOpen] = useState("");
    const [isSticky, setSticky] = useState(false);
    const ref = useRef(null);
    const handleScroll = () => {
      if (ref.current) {
        setSticky(ref.current.getBoundingClientRect().top <= -0);
      }
    };
    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', () => handleScroll);
      };
    }, []);

    const theme = useTheme()

    const node = useRef(); 
    useOnClickOutside(node, () => setDropDownOpen(""));

    return(
      <StyledDesktop theme={theme} ref={node}> 
        <div className={`sticky-wrapper${isSticky ? ' sticky' : ''}`} ref={ref}>
          <div className="sticky-inner">
            <div>
            <Link to="/">
                Hem
                </Link> 
            </div>
                 
                <div onMouseEnter={() => setDropDownOpen("Kontakt")}>
                <DropDown open={dropDownOpen == "Kontakt"}  down={true} content={<ContactMenu />} setOpen={() => setDropDownOpen("Kontakt")}>    
                  Kontakt
                  <ExpandIcon expanded ={dropDownOpen == "Kontakt"}/>   
                </DropDown>
                </div>

                <div onMouseEnter={() => setDropDownOpen("Behandlingar")}>
                    <DropDown     
                        open={dropDownOpen == "Behandlingar"} 
                        content={<ServiceMenu />}
                        setOpen={() => setDropDownOpen("Behandlingar")}
                        down={true}          
                    >
                      Behandlingar
                      <ExpandIcon expanded ={dropDownOpen == "Behandlingar"}/>   
                      </DropDown>    
                     
                </div>

                <div onMouseEnter={() => setDropDownOpen("Mer")}>
                  <DropDown open={dropDownOpen == "Mer"}  down={true} content={<MoreMenu />} setOpen={() => setDropDownOpen("Mer")}>    
                    Mer
                    <ExpandIcon expanded ={dropDownOpen == "Mer"}/>   
                  </DropDown>
                </div> 
          </div>
        </div>   
      </StyledDesktop>   
    )
  }
  
export default Navbar

