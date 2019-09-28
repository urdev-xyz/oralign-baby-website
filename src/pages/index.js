import React from "react"
import { Link, graphql } from "gatsby"


import Layout from "../components/layout"
import BackgroundImage from 'gatsby-background-image-es5'

import mypaciLogo from '../images/mypaciLogo.svg'

import SEO from "../components/seo"
import Img from "gatsby-image"

import {WalmartButton} from '../components/buttons'
import {ProductCardPreview} from '../components/ProductCard'
import { Star, ReviewCard } from '../components/Review'
import Fade from 'react-reveal/Fade';




const IndexPage = ({ data }) => {
  const products = data.allContentfulProduct.nodes
  const reviews = data.allContentfulReview.nodes
  console.log(reviews)
  return (
  <Layout>
    <SEO title="Home" />
    <Fade>
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
            <div className="header-content-inner">
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
            <span>MADE IN THE USA | 100% MEDICAL GRADE SILICONE</span>
            </div>
            </div>
        </BackgroundImage>
    </header>
    </Fade>
    <div className="product-preview-container">
    {products.map(product => {
      return (
        <ProductCardPreview name={product.name} description={product.description} src={product.image.file.url}/>
      )
    })}
    </div>
    <Fade bottom>
    <div className="home-section">
        <h1 id="useOne">The only 100% silicone pacifier that will eliminate the chance of finger entrapment and finger strangulation. </h1>
    </div>
    </Fade>
    <div className="review-container home-section">
      {reviews.map(review => {
        return (
          <Fade bottom>
          <ReviewCard data={review}></ReviewCard>
          </Fade>
        )
      })}
    </div>
    
  </Layout>
)}
export const query = graphql`
  query {
    desktop: file(relativePath: { eq: "hero.jpeg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 1920) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    
      allContentfulProduct {
        nodes {
          name,
          description,
          price,
          image {
            file {
              url
            }
          }
        }
      }
      allContentfulReview {
        nodes {
          name,
          stars,
          review,
          image {
            file {
              url
            }
          }
        }
      }
  }
`


export default IndexPage
