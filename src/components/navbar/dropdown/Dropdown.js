import React, {useState, useRef} from 'react';
import { Link } from 'gatsby'
import { Wrapper, ListItem, Button, Content, ascending, descending} from './Drowdown.styled';
import { useTheme  } from '@emotion/react'
import {useCategoryData} from '../../CategoryData'
import { useOnClickOutside } from '../../../utils/hooks';

const Dropdown = ({title, open, setOpen, down}) => {
  const theme = useTheme()
  const node = useRef(); 
  useOnClickOutside(node, () => setOpen(false));
 
  const categories = useCategoryData();
  return (
    <Wrapper theme={theme} expanded={open} ref={node}>  
     <Button theme={theme} expanded={open} onClick={() => setOpen(!open)} down={down}>
        <div className="icon">
            <div />
            <div />   
        </div>   
        {title}      
      </Button>
        <Content theme={theme} expanded={open} css={down ? descending : ascending}>
          {
            categories.map((category, index) => {
                const i = down ? index : categories.length - index
                return(
              <ListItem key={index} theme={theme} expanded={open} index={open ? i : 0} down={down}>
                <Link to={`/${category.slug}`}>
                    {category.title}
                </Link>
               </ListItem>
            )})
          }       
        </Content>
    </Wrapper>
  )
}

export default Dropdown;