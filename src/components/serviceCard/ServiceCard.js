import React from "react"
import { StyledServiceCard } from './ServiceCard.styled'
import { useTheme  } from '@emotion/react'
import { Link } from 'gatsby'
import {BokaButton} from '../../components'
import { RiArrowDropDownLine } from 'react-icons/ri';

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
            {time} , {price}  <RiArrowDropDownLine size={25}/>
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

