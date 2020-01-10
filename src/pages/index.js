import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import Banner from "../components/Banner"
import About from "../components/Home/About"
import Services from "../components/Home/Services"
import StyledHero from "../components/StyledHero"
import { graphql } from "gatsby"
import FeaturedTours from "../components/Home/FeaturedTours"
export default ({ data }) => (
  <Layout>
    <StyledHero home="true" img={data.bannerImg.childImageSharp.fluid}>
      <Banner
        title="This is the title"
        info="this is the new web site from the creator of the web site"
      >
        <Link to="/tours" className="btn-white">
          explore tours
        </Link>
      </Banner>
    </StyledHero>
    <About />

    <Services />
    <FeaturedTours />
  </Layout>
)
export const query = graphql`
  query {
    bannerImg: file(relativePath: { eq: "home.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
