import React, {useRef} from 'react';
import { Wrapper, Button, Content, ascending, descending} from './Drowdown.styled';
import { useTheme  } from '@emotion/react'

const Dropdown = ({children, content, open, setOpen, down}) => {
  const theme = useTheme()

 
 

  return (
    <Wrapper theme={theme} expanded={open} >  
     <Button theme={theme} expanded={open} onClick={setOpen} down={down}>   
        {children}        
      </Button>
      <Content theme={theme} expanded={open} css={down ? descending : ascending}>
        {content}       
      </Content>
    </Wrapper>
  )
}

export default Dropdown;