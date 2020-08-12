import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import {PageHeader} from "../components/page-header"
import SEO from "../components/seo"
import { Player, BigPlayButton } from 'video-react';

import VIDEO from '../images/vid.mp4'
import VIDEOPOSTER from '../images/poster.jpg'


import "./styles/index.scss"
import productBanner from '../images/productBanner.png'
import {ProductCardPreview, ProductCard} from '../components/ProductCard'

const Product = ({ data }) => {
  let styles = {
    width: '100%',
    minHeight: '120px',
    marginTop: 30,
    marginBottom: 15,
    backgroundColor: '#fff',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#fff',
    fontSize: "2rem",
    fontWeight: '300'
  }
  let img = {
      width: '100%',
      maxWidth: '1000px',
      textAlign: 'center'
  }
  let para = {
    padding: 10
  }
  const products = data.allContentfulProduct.nodes

  return (
    <Layout>
        <div className="page-container">
            <div className="page">
            <div className="products-container home-section">
            {products.map(product => {
              return (
                <ProductCard shouldShowLearnMore={false} name={product.name} price={product.price} description={product.description} src={product.image.file.url}/>
              )
            })}
            <div style={styles} className="page-header-large">
                    <img style={img} src={productBanner}></img>
                </div>
            </div>
            
            <p >MyPaci® is not another “hospital pacifier”, but is an all new pacifier designed to be a premium upgrade with true benefits for the child who prefers the traditional round, hospital type of pacifiers.</p>
            <Player
              playsInline
              poster={VIDEOPOSTER}
              src={VIDEO}
            >
              <BigPlayButton position="center" />
            </Player>
            <div className="product-facts-container">
              <div className="product-fact">
                <h1>Finger Safe</h1>
                <p>MyPaci® is the only one piece silicone pacifier that will prevent finger  entrapment and finger strangulation with its patent pending Finger  Safety Wall™.</p>
              </div>
              <div className="product-fact">
                <h1>Comfort</h1>
                <p>The patent pending Comfort Stem® is an innovation with an inverted  nipple design that will lower orthodontic problem causing pressures by more than 40%, as compared to all of the other traditional nipple designs with the same material and wall thicknesses.</p>
              </div>
              <div className="product-fact">
                <h1>Safety Rating</h1>
                <p>The all age safety rating allows your child to experience the same  comforting feel across all age ranges with no chance of rejection due to having to move up to an older stiffer version. The safety rating also  eliminates the chance of a caregiver to accidental give a child an age  inappropriate pacifier that could present a choking hazard.</p>
              </div>
              <div className="product-fact">
                <h1>Material</h1>
                <p>MyPaci is made with a 100% medical grade silicone and no fillers. It is free of PBA, latex and phthalates.</p>
              </div>
              <div className="product-fact">
                <h1>Color</h1>
                <p>At the present I am only going to offer blue with future colors in the works. I am not going to offer a pink version as red colorants contain cadmium which is a known carcinogen linked to breast, prostate and pancreatic  cancers.</p>
              </div>
              <div className="product-fact">
                <h1>Cleanliness</h1>
                <p>The opening in the Finger Safety Wall™ allows the passage of a brush as well as allowing water and soaps/ vinegar to flow into and out of the  interior of the nipple. The inside of the Finger Safety Wall™ is concave to promote fluid evacuation. The Stand Up Handle™ also keeps MyPaci®  upright when not in use, so no more rolling around or having the shield make contact with an unclean surface.</p>
              </div>
              <div className="product-fact">
                <h1>Four Safety Air Holes</h1>
                <p>The design of the Stand Up Handle™ allowed me to place four safety air holes. US regulations require 2 safety air holes, so with MyPaci if you use one of the holes to secure a tether, you still have one more safety hole than required by those regulations. Another important safety point addressed with MyPaci®.</p>
              </div>
              <div className="product-fact">
                <h1>One Piece Design</h1>
                <p>The only pacifier design type recommended by the American Academy of Pediatrics. Oralign Baby will only produce one piece designs.</p>
              </div>
              <div className="product-fact">
                <h1>Made In The USA</h1>
                <p>Oralign Baby works with Kipe Molds in California who have the upmost  experience in pacifier mold engineering. </p>
              </div>
            </div>
            </div>
        </div>
      </Layout>
  )
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
          review {
            review
          },
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


export default Product
