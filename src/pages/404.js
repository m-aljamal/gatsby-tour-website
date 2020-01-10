import React from "react"
import styles from "../css/error.module.css"

import AniLink from "gatsby-plugin-transition-link/AniLink"

import Banner from "../components/Banner"
import Layout from "../components/Layout"
function error(props) {
  return (
    <Layout>
      <header className={styles.error}>
        <Banner title="oops it'is a dead end">
          <AniLink fade to="/" className="btn-white">
            back to home page
          </AniLink>
        </Banner>
      </header>
    </Layout>
  )
}

export default error
