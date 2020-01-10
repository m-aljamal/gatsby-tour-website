import React from "react"
import Layout from "../components/Layout"
import StyledHero from "../components/StyledHero"
import { graphql } from "gatsby"
import Tours from "../components/Tours/Tours"
function tours(props) {
  return (
    <Layout>
      <StyledHero img={props.data.bannerImg.childImageSharp.fluid} />
      <Tours />
    </Layout>
  )
}

export default tours

export const query = graphql`
  query {
    bannerImg: file(relativePath: { eq: "defaultBcg.jpeg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
