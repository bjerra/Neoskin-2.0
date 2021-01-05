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
            <div className="header">
              
               
            <h5>{service.title}</h5>
            </div>      
         
          <div className="body">
            <p>
                {time}
            </p>                 
            <p >
                {price}
            </p> 
            <BokaButton url={url}/>    
            </div>
            <Link 
              to={`/behandlingar/${service.slug}`} 
              state={{modal: true}}> 
              mer info
            </Link>       

     </StyledServiceCard>
  )
}

export default ServiceCard

