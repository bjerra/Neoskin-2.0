import React from 'react'
import { Helmet } from 'react-helmet'
import { withPrefix } from 'gatsby'

const SEO = ({ title, description }) => {
  return (
      <Helmet>
        <html lang="en"/>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link 
          href="https://fonts.googleapis.com/css?family=Quicksand" 
          rel="stylesheet"
          />
           <link 
          href="https://fonts.googleapis.com/css?family=Josefin+Sans" 
          rel="stylesheet"
          />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={`${withPrefix('/')}img/apple-touch-icon.png`}
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix('/')}img/favicon-32x32.png`}
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix('/')}img/favicon-16x16.png`}
          sizes="16x16"
        />

        <link
          rel="mask-icon"
          href={`${withPrefix('/')}img/safari-pinned-tab.svg`}
          color="#ff4400"
        />
        <meta name="theme-color" content="#fff" />

        <meta property="og:type" content="business.business" />
        <meta property="og:title" content={title} />
        <meta property="og:url" content="/" />
        <meta
          property="og:image"
          content={`${withPrefix('/')}img/og-image.jpg`}
        />
        <meta property="og:site_name" content={title} />
      </Helmet>     
  )
}

export default SEO