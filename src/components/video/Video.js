import React from "react"
import { StyledVideo } from './Video.styled'

const Video = ({ url, title, ...props }) => (
  <StyledVideo>
    <iframe
      src={url}
      title={title}
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      frameBorder="0"
      width= "100%"
      height="100%"
      webkitallowfullscreen="true"
      mozallowfullscreen="true"
      allowFullScreen
    />
  </StyledVideo>
)
export default Video