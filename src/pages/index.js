import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    
  </Layout>
)
export const query = graphql`
  query {
      allContentfulReview {
        nodes {
          name,
          stars,
          review
        }
      }
  }
`


export default IndexPage
