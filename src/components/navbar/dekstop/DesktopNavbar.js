import React, { useEffect, useRef, useState } from 'react';
import Menu from "../menu/Menu";
import { Link } from 'gatsby'
import { StyledDesktop, Primary , Secondary} from './DesktopNavbar.styled';
import { useTheme  } from '@emotion/react'
import DropDown from '../dropdown/Dropdown'

const Navbar = props => {
    const [dropDownOpen, setDropDownOpen] = useState(false);
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

    return(
      <StyledDesktop theme={theme}>
        <div className={`sticky-wrapper${isSticky ? ' sticky' : ''}`} ref={ref}>
          <div className="sticky-inner">
              <Primary>
                <Link to="/">
                Hem
                </Link>  
                <div onMouseEnter={() => setDropDownOpen(true)}>
                    <DropDown 
                        title={"Behandlingar"} 
                        open={dropDownOpen} 
                        setOpen={setDropDownOpen}   
                        down={true}          
                    />       
                </div>
              
                <Link to="/kontakt">
                    Kontakt
                </Link>
              </Primary>
              <div style={{flex:1}}/>   
              <Secondary>
              <Link to="/om">
                Om
                </Link>  
                <Link to="/nyhetsbrev">
                    Nyhetsbrev
                </Link> 

              
              </Secondary> 
          </div>
        </div>   
      </StyledDesktop>   
    )
  }
  
export default Navbar

