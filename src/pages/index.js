import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import BackgroundImage from 'gatsby-background-image-es5'

import SEO from "../components/seo"
import Img from "gatsby-image"


const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <header>
    <BackgroundImage
          Tag="section"
          className="header-background"
          fluid={data.desktop.childImageSharp.fluid}
          backgroundColor={`#fff`}
          style={{
            // Defaults are overwrite-able by setting one or each of the following:
            backgroundSize: 'cover',
            backgroundPosition: 'center 70%',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <div className="blue-tint"/>
          <div className="header-content">
            HELLO WORLD
          </div>
        </BackgroundImage>
    </header>
  </Layout>
)
export const query = graphql`
  query {
    desktop: file(relativePath: { eq: "hero.jpeg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 1920) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    
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
