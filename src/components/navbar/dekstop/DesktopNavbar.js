import React, { useEffect, useRef, useState } from 'react';
import Menu from "../menu/Menu";
import { Link } from 'gatsby'
import { useOnClickOutside } from '../../../utils/hooks';
import { StyledDesktop, ListItem , Expandable} from './DesktopNavbar.styled';
import { useTheme  } from '@emotion/react'
import {useCategoryData} from '../../CategoryData'

const Navbar = props => {
    const categories = useCategoryData();
    const [servicesExpanded, setservicesExpanded] = useState(false);
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
    const [open, setOpen] = useState(false);
    const node = useRef(); 
    useOnClickOutside(node, () => setOpen(false));
    return(
      <StyledDesktop>
        <div ref={node}>     
        <Menu open={open} setOpen={setOpen} />
        </div>   
        <div className={`sticky-wrapper${isSticky ? ' sticky' : ''}`} ref={ref}>
          <div className="sticky-inner">

          <div> 
        <Link to="/">
          Hem
        </Link>  
      </div>   
          <div> 
        <Link to="/om">
          Behandlingar
        </Link>  
      </div>                     
      <div> 
        <Link to="/nyhetsbrev">
          Kontakt
        </Link> 
      </div>  
     
      <div>
        <Link to="/kontakt">
          Mer
        </Link>
      </div>  
          </div>
        </div>   
      </StyledDesktop>   
    )
  }
  
export default Navbar

