import React from 'react'
import PropTypes from 'prop-types'

import {StyledDivider} from './Divider.styled'


const Divider = ({title}) => (
  <StyledDivider>
      <h3>{title}</h3>
  </StyledDivider>
)

Divider.propTypes = {
    title: PropTypes.string  
}

export default Divider
