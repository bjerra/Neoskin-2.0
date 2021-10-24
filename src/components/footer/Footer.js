import React from 'react'
import {StyledFooter} from './Footer.styled'
import { useTheme  } from '@emotion/react'
import {AiOutlineMail, AiOutlineInstagram, AiOutlinePhone, AiOutlineEnvironment} from 'react-icons/ai';
import {Divider} from '../../components'

const Footer = props => {
  const theme = useTheme()
  return(
    <div>
        <Divider fillColor={theme.COLOR.BACKGROUND} color={theme.COLOR.OAK} height={15} size={20}/>
        <Divider fillColor={theme.COLOR.OAK} color={theme.COLOR.MUSTARD} height={15} size={15}/>
        <Divider fillColor={theme.COLOR.MUSTARD} color={theme.COLOR.FOOTER} height={30} size={50}/>

        <StyledFooter theme={theme}>  

      

        <ul/> 
            <ul>      
            <li>
                  <a rel="nofollow noopener noreferrer external" href="https://www.google.com/maps/search/?api=1&amp;query=57.7815209,14.1746004" target="_blank">
                  <AiOutlineEnvironment />
                    <span>
                      Smedjegatan <br/> 38 553 20<br/> 
                      Jönköping City  
                    </span>
                  </a>   
                </li>     
              
              </ul>
              <ul/> 
              <ul>      
                    
            
              <li>
                
                <a href="tel:+46722065222" title="+46722065222">
                <AiOutlinePhone />
                <span>
                    072-2065222     
                  </span>
                </a>
              </li>      
              <li>
                  <a href="mailto:anais@neoskin.se" title="anais@neoskin.se">
                    <AiOutlineMail />
                  <span>
                  anais@neoskin.se    

                  </span>
                  
                  </a> 
              </li> 
              <li>
        <a href="https://instagram.com/neoskin.se" target="_blank" rel="noopener noreferrer" title="neoskin.se@Instagram">
        <AiOutlineInstagram />
        <span>
        @neoskin.se
                  </span>       
          </a>  
        </li>
        </ul>
        <ul/> 
      </StyledFooter>
    </div>
     
    )
  }


export default Footer
