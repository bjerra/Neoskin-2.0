import React from "react"
import { StyledServiceCard } from './ServiceCard.styled'
import { useTheme  } from '@emotion/react'

const ServiceCard = ({service}) => {

  const {price, time, url} = service
  const theme = useTheme()

  return (   
      <StyledServiceCard theme={theme}>
            <div className="header">
                <div>
                <img src="/img/logo-nav.png" alt="logo" />
                </div>
               
            <h5>{service.title}</h5>
            </div>      
         
          <div className="body">
            <p>
                {time}
            </p>                 
            <p >
                {price}
            </p> 
            <a href={url} target="_blank" rel="noopener noreferrer">    
               Boka                                    
            </a>
            </div>
        

     </StyledServiceCard>
  )
}

export default ServiceCard

