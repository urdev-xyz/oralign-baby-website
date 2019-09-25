import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import BackgroundImage from 'gatsby-background-image-es5'

import mypaciLogo from '../images/mypaciLogo.svg'

import SEO from "../components/seo"
import Img from "gatsby-image"

import {WalmartButton} from '../components/buttons'


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
            <img src={mypaciLogo}></img>
            <section className="header-tagline">
              3 years to design,<br/>
              30 years of experience,<br/>
              Seconds to see the difference.
            </section>
            <section className="header-subline">
              keeping little fingers safe
            </section>
            <div className="button-container">
              <WalmartButton/>
              <Link to="/somethi"><button className="white">Learn More</button></Link>
            </div>
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
