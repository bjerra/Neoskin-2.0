import React from 'react'
import PropTypes from 'prop-types'
import {Banner, Layout} from '../../components'
import Content from '../../components/Content'
import { Wrapper, Body} from '../styles/StyledAboutPage'

const AboutPage = ({ title, image, content, contentComponent }) => {
  const PageContent = contentComponent || Content
  return (
    <Layout>
        <Wrapper>
            <Banner image={image} alt={"Metod"} position={"50% 70%"}>

            </Banner>
            <h1>
                    {title}
                </h1>  
            <Body>
                <div className="inner">   
                
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