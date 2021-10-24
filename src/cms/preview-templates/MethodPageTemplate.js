import React from 'react'
import PropTypes from 'prop-types'
import { MethodPageTemplate } from '../../templates/method-page'

const AboutPagePreview = ({ entry, widgetFor }) => (
  <MethodPageTemplate
    title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}
  />
)

MethodPageTemplate.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default MethodPageTemplate
