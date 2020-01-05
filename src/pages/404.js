import React from "react"
import styles from "../css/error.module.css"
import { Link } from "gatsby"
import Banner from "../components/Banner"
import Layout from "../components/Layout"
function error(props) {
  return (
    <Layout>
      <header className={styles.error}>
        <Banner title="oops it'is a dead end">
          <Link to="/" className="btn-white">
            back to home page
          </Link>
        </Banner>
      </header>
    </Layout>
  )
}

export default error
