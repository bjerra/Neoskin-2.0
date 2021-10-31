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
            <Banner image={image} alt={"Metod"} position={"50% 10%"}>

            </Banner>
            <h1>
                    {title}
                </h1>  
              
            <Body>
                <div className="inner">   
                <Divider fillColor={theme.COLOR.DIM_BLUE} color={theme.COLOR.BACKGROUND} height={5} size={5} invert />
              <Divider fillColor={theme.COLOR.BACKGROUND} color={theme.COLOR.DIM_BLUE} height={6} size={5} invert />
                <PageContent content={content} />
                
                </div>  
                <p className="signature">Anaïs</p>
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