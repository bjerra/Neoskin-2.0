import React from 'react'
import PropTypes from 'prop-types'
import { ImHeart } from 'react-icons/im';
import {StyledDivider} from './Divider.styled'


const Divider = ({title}) => (
  <StyledDivider> 
      <ImHeart size={32}/>
      <h3>{title}</h3> 
  </StyledDivider>
)

Divider.propTypes = {
    title: PropTypes.string  
}

export default Divider
