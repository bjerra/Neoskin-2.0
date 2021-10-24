import React from 'react';
import SEO from '../SEO'
import {Wrapper, Body} from './Layout.styled'
import Footer from '../footer/Footer'
import Navbar from '../navbar/Navbar'
import useSiteMetadata from '../SiteMetadata'
import {Divider} from '../../components'
import { useTheme  } from '@emotion/react'

const TemplateWrapper = ({ pageTitle, pageDescription, children }) => {

  const { title, description } = useSiteMetadata()
  const theme = useTheme();
  
  return (
      <Wrapper>    
        
        <SEO title={pageTitle || title} description={pageDescription || description}/>   
        <Navbar />
        <Body>
          {children}
         
        </Body>
        <Divider fillColor={theme.COLOR.BACKGROUND} color={theme.COLOR.LIGHT} height={5} size={3}/>
        <Divider fillColor={theme.COLOR.LIGHT} color={theme.COLOR.INFO} height={10} size={10}/>
        <Divider fillColor={theme.COLOR.INFO} color={theme.COLOR.DIM_BLUE} height={15} size={20}/>
        <Divider fillColor={theme.COLOR.DIM_BLUE} color={theme.COLOR.MISTY_BLUE} height={15} size={15}/>
        <Divider fillColor={theme.COLOR.MISTY_BLUE} color={theme.COLOR.FOOTER} height={30} size={50}/>

        <Footer />
      </Wrapper>
  )
}

export default TemplateWrapper
