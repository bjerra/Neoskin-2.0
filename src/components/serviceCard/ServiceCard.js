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
        <div>
          <h5>{service.title}</h5>
          <div>
          <p>
            {time} , {price}
          </p> 
          <Link 
            to={`/behandlingar/${service.slug}`} 
            state={{modal: true}}> 
            mer info
          </Link>  
          </div>
       
        </div>
        <div>
          <BokaButton url={url}/>    
        </div>
     </StyledServiceCard>
  )
}

export default ServiceCard

