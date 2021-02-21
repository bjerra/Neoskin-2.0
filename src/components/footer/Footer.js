import React from 'react'
import {StyledFooter} from './Footer.styled'
import { useTheme  } from '@emotion/react'

const Footer = props => {
  const theme = useTheme()
  return(
      <StyledFooter theme={theme}>       
          <ul>      
          <li>
                <a rel="nofollow noopener noreferrer external" href="https://www.google.com/maps/search/?api=1&amp;query=57.7815209,14.1746004" target="_blank">
                    
                  <p>
                    Smedjegatan <br/> 38 553 20<br/> 
                    Jönköping City  
                  </p>
                </a>   
              </li>            
            </ul>
            <ul>      
                  
            <li>
              <a href="tel:+46722065222" title="+46722065222">
               
                <p>
                 Telefon: 072-2065222     
                </p>       
              </a>
            </li>
             <li>
                <a href="mailto:anais@neoskin.se" title="anais@neoskin.se">
                  
                  <p>
                  Email: anais@neoskin.se    
                  </p>  
                </a> 
             </li>
          
            </ul>
        </StyledFooter>
    )
  }


export default Footer
