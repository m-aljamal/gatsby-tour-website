import React from "react"
import styled from "styled-components"
import BackgroundImage from "gatsby-background-image"
function StyledHero({ img, className, children, home }) {
  return (
    <BackgroundImage className={className} fluid={img} home={home}>
      {children}
    </BackgroundImage>
  )
}

export default styled(StyledHero)`
  /* if the home prop is provided by this component apply linear-gradient and calc */
  min-height: ${props => (props.home ? "calc(100vh - 62px)" : "50vh")};
  background: ${props =>
    props.home &&
    "linear-gradient(rgba(63, 208, 212, 0.7), rgba(0, 0, 0, 0.7))"};
  background-position: center;
  background-size: cover;
  opacity: 1 !important;
  display: flex;
  justify-content: center;
  align-items: center;
`