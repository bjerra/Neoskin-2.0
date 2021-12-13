import React from 'react'
import PropTypes from 'prop-types'
import {Banner, Layout, Divider} from '../../components'
import Content from '../../components/Content'
import { Wrapper, Body} from '../styles/StyledAboutPage'
import { useTheme } from '@emotion/react'

const AboutPage = ({ title, image, content, contentComponent }) => {
  const PageContent = contentComponent || Content
  const theme = useTheme();
  return (
    <Layout>
        <Wrapper>
            <Banner image={image} alt={"Metod"} position={"50% 30%"} height={"30rem"}>

            </Banner>
      
            <Body>
                <h1>
                    {title}
                </h1> 
                <div className="inner">   
              
                <PageContent content={content} />
                <div>
                <p className="signature">Anaïs</p>
                  </div>
               
                </div>  
                
            </Body>
        </Wrapper>
    </Layout>
  )
}


AboutPage.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

export default AboutPage