import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import {PageHeader} from "../components/page-header"
import { ReviewCard } from '../components/Review'

import Fade from 'react-reveal/Fade';

import SEO from "../components/seo"

import "./styles/index.scss"
import "./styles/reviews.scss"

const Reviews = ({data}) => {


  const reviews = data.allContentfulReview.nodes

  return(<Layout>
    <div className="page-container">
        <PageHeader pageTitle="Reviews"/>
        <div className="page">
          <div className="review-page-copy">
            <h1>The Reviews Are In</h1>
            <p>As a smart consumer, you should always look for multiple reviews of every product you use, especially those that influence your family’s health. That’s why we’ve provided a sampling of reviews for you to explore and invite you to go online and search for even more yourself. </p>
          </div>
          <div className="review-container">
            {reviews.map(review => {
              return (
                <>
                <Fade bottom>
                  <ReviewCard data={review}></ReviewCard>
                </Fade>
                <Fade bottom>
                  <ReviewCard data={review}></ReviewCard>
                </Fade>
                </>
              )
            })}
          </div>
        </div>
    </div>
  </Layout>)
}

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
      allContentfulAward {
        nodes {
          name,
          image {
            file {
              url
            }
          }
        }
      }
      allContentfulQuestion {
        nodes {
          question,
          answer {
            json
          }
        }
      }
  }
`

export default Reviews
