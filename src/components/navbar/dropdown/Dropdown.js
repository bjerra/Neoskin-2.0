import React, {useState} from 'react';
import { Link } from 'gatsby'
import { Wrapper, ListItem, Button, Content} from './Drowdown.styled';
import { useTheme  } from '@emotion/react'
import {useCategoryData} from '../../CategoryData'

const Dropdown = ({title}) => {
  const theme = useTheme()
  const [expanded, setExpanded] = useState(false);
  const categories = useCategoryData();
  return (
    <Wrapper theme={theme} expanded={expanded}>  
     <Button theme={theme} expanded={expanded} onClick={() => setExpanded(!expanded)}>
        <div className="icon">
            <div />
            <div />   
        </div>   
        {title}      
      </Button>
        <Content theme={theme} expanded={expanded}>
          {
            categories.map((category, index) =>(
              <ListItem key={index} theme={theme} expanded={expanded} index={expanded ? (categories.length - index): 0}>
                <Link to={`/${category.slug}`}>
                    {category.title}
                </Link>
               </ListItem>
            ))
          }       
        </Content>
    </Wrapper>
  )
}

export default Dropdown;