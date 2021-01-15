import React from "react"
import { StyledServiceCard } from './ServiceCard.styled'
import { useTheme  } from '@emotion/react'
import { Link } from 'gatsby'
import {BokaButton} from '../../components'
import { BiDownArrow } from 'react-icons/bi';

const ServiceCard = ({service}) => {

  const {price, time, url} = service
  const theme = useTheme()

  return (   
      <StyledServiceCard theme={theme}>
        <Link  
            to={`/behandlingar/${service.slug}`} 
            state={{modal: true}}>
          <h4>{service.title}</h4>
          <div>
          <p>
            {time} , {price}
          </p> 
        
          </div>
         
        </Link>
        <div>
          <BokaButton url={url}/>    
        </div>
        <BiDownArrow size={20}/> 
     </StyledServiceCard>
  )
}

export default ServiceCard

