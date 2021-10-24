import React from 'react';
import SEO from '../SEO'
import {Wrapper, Body} from './Layout.styled'
import Footer from '../footer/Footer'
import Navbar from '../navbar/Navbar'
import useSiteMetadata from '../SiteMetadata'
import { useTheme  } from '@emotion/react'

const TemplateWrapper = ({ pageTitle, pageDescription, children }) => {

  const { title, description } = useSiteMetadata()
  const theme = useTheme();
  
  return (
      <Wrapper theme={theme}>    
        
        <SEO title={pageTitle || title} description={pageDescription || description}/>   
        <Navbar />
        <Body>
          {children}
         
        </Body>
        <Footer />
      </Wrapper>
  )
}

export default TemplateWrapper
