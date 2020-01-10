import React from "react"
import Layout from "../components/Layout"
import StyledHero from "../components/StyledHero"
import { graphql } from "gatsby"
function blog(props) {
  return (
    <Layout>
     <StyledHero img={props.data.bannerImg.childImageSharp.fluid}/>
    </Layout>
  )
}

export default blog

export const query = graphql`
  query {
    bannerImg: file(relativePath: { eq: "blogBcg.jpeg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
