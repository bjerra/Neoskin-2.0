import React from 'react'
import PropTypes from 'prop-types'
import {StyledDivider} from './Divider.styled'


const Divider = ({children}) => (
  <StyledDivider> 
    <div />
    <div />
    <div/>
     {children}
    <div />
    <div />
    <div />
  </StyledDivider>
)

Divider.propTypes = {
    title: PropTypes.string  
}

export default Divider
