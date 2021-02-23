import React from "react"
import { StyledServiceCard } from './ServiceCard.styled'
import { useTheme  } from '@emotion/react'
import { Link } from 'gatsby'
import {BokaButton} from '../../components'

const ServiceCard = ({service}) => {

  const {price, time, url} = service
  const theme = useTheme()

  return (   
      <StyledServiceCard theme={theme}>
        <Link  
            to={`/behandlingar/${service.slug}`} 
            state={{modal: true}}>
          <h5>{service.title}</h5>
          <div>
          <p>
            {time} , {price} <span>mer info</span> 
          </p> 
        
          </div>
          
        </Link>
        <div>
            <BokaButton url={url}/>    
        </div>
       
     </StyledServiceCard>
  )
}

export default ServiceCard

