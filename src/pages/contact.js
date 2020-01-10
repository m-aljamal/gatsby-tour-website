import React from "react"
import Layout from "../components/Layout"
import StyledHero from "../components/StyledHero"
import { graphql } from "gatsby"
import ContactComponent from "../components/Contact/ContactComponent"
function Contact(props) {
  return (
    <Layout>
      <StyledHero img={props.data.bannerImg.childImageSharp.fluid} />
      <ContactComponent />
    </Layout>
  )
}

export default Contact

export const query = graphql`
  query {
    bannerImg: file(relativePath: { eq: "connectBcg.jpeg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
