import React from 'react';
import { Link } from 'gatsby'
import { Wrapper, ListItem} from './Drowdown.styled';
import { useTheme  } from '@emotion/react'
import {useCategoryData} from '../../CategoryData'

const Dropdown = ({ expanded }) => {
  const theme = useTheme()
  const categories = useCategoryData();
  return (
    <Wrapper theme={theme} expanded={expanded}>  
        <ul>
          {
            categories.map((category, index) =>(
              <ListItem key={index} expanded={expanded} index={expanded ? index: 0}>
                <Link to={`/${category.slug}`}>
                    {category.title}
                </Link>
               </ListItem>
            ))
          }       
        </ul>
    </Wrapper>
  )
}

export default Dropdown;