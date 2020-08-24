import React from "react"
import { Link, graphql } from "gatsby"


import Layout from "../components/layout"
import BackgroundImage from 'gatsby-background-image-es5'

import mypaciLogo from '../images/mypaciLogo.svg'

import SEO from "../components/seo"
import Img from "gatsby-image"

import {WalmartButton, AmazonButton} from '../components/buttons'
import {ProductCardPreview, ProductCard} from '../components/ProductCard'
import { Star, ReviewCard } from '../components/Review'
import Fade from 'react-reveal/Fade';
import { Player, BigPlayButton } from 'video-react';

import VIDEO from '../images/vid.mp4'
import VIDEOPOSTER from '../images/poster.jpg'

import { BLOCKS, MARKS } from "@contentful/rich-text-types"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

import john from '../images/cap1.jpg'


require('details-polyfill')






const IndexPage = ({ data }) => {
  const products = data.allContentfulProduct.nodes
  const reviews = data.allContentfulReview.nodes
  const questions = data.allContentfulQuestion.nodes
  const awards = data.allContentfulAward.nodes

  const Bold = ({ children }) => <span className="bold">{children}</span>
  const Text = ({ children }) => <p className="align-center">{children}</p>
  
  const options = {
    renderMark: {
      [MARKS.BOLD]: text => <Bold>{text}</Bold>,
    },
    renderNode: {
      [BLOCKS.PARAGRAPH]: (questions, children) => <Text>{children}</Text>,
    },
  }
  
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
            </section>
            <div className="button-container">
              <AmazonButton/>
              <Link to="/product"><button className="white">Learn More</button></Link>
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
    <div className="home-section">
      {reviews.map(review => {
        return (
          <Fade bottom>
          <ReviewCard data={review}></ReviewCard>
          </Fade>
        )
      })}
    </div>
    <div className="facts-container home-section">
    <Fade left>
      <div className="fact">
        <div className="fact-svg">
          <svg xmlns="http://www.w3.org/2000/svg" width="" height="100" viewBox="0 0 800 422" fill="none">
          <g clip-path="url(#clip0)">
          <path d="M800 0H0V32.39H800V0Z" fill="#B01820"/>
          <path d="M800 388.66H0V421.05H800V388.66Z" fill="#B01820"/>
          <path d="M800 323.89H0V356.28H800V323.89Z" fill="#B01820"/>
          <path d="M800 259.11H0V291.5H800V259.11Z" fill="#B01820"/>
          <path d="M800 194.33H0V226.72H800V194.33Z" fill="#B01820"/>
          <path d="M800 129.55H0V161.94H800V129.55Z" fill="#B01820"/>
          <path d="M800 64.78H0V97.17H800V64.78Z" fill="#B01820"/>
          <path d="M800 356.28H0V388.67H800V356.28Z" fill="white"/>
          <path d="M800 291.5H0V323.89H800V291.5Z" fill="white"/>
          <path d="M800 226.72H0V259.11H800V226.72Z" fill="white"/>
          <path d="M800 161.94H0V194.33H800V161.94Z" fill="white"/>
          <path d="M800 97.17H0V129.56H800V97.17Z" fill="white"/>
          <path d="M800 32.39H0V64.78H800V32.39Z" fill="white"/>
          <path d="M320 0H0V226.72H320V0Z" fill="#002A70"/>
          <path d="M26.6701 9.70001L23.7501 18.67H14.3301L21.9501 24.2L19.0401 33.17L26.6701 27.63L34.2901 33.17L31.3801 24.2L39.0001 18.67H29.5801L26.6701 9.70001Z" fill="white"/>
          <path d="M79.9999 9.70001L77.0899 18.67H67.6699L75.2899 24.2L72.3799 33.17L79.9999 27.63L87.6199 33.17L84.7099 24.2L92.3299 18.67H82.9099L79.9999 9.70001Z" fill="white"/>
          <path d="M133.33 9.70001L130.42 18.67H121L128.62 24.2L125.71 33.17L133.33 27.63L140.96 33.17L138.04 24.2L145.67 18.67H136.25L133.33 9.70001Z" fill="white"/>
          <path d="M186.67 9.70001L183.75 18.67H174.33L181.96 24.2L179.04 33.17L186.67 27.63L194.29 33.17L191.38 24.2L199 18.67H189.58L186.67 9.70001Z" fill="white"/>
          <path d="M240 9.70001L237.09 18.67H227.66L235.29 24.2L232.38 33.17L240 27.63L247.62 33.17L244.71 24.2L252.34 18.67H242.91L240 9.70001Z" fill="white"/>
          <path d="M285.71 33.17L293.33 27.63L300.96 33.17L298.04 24.2L305.67 18.67H296.25L293.33 9.70001L290.42 18.67H281L288.62 24.2L285.71 33.17Z" fill="white"/>
          <path d="M26.6701 55.05L23.7501 64.01H14.3301L21.9501 69.55L19.0401 78.51L26.6701 72.97L34.2901 78.51L31.3801 69.55L39.0001 64.01H29.5801L26.6701 55.05Z" fill="white"/>
          <path d="M79.9999 55.05L77.0899 64.01H67.6699L75.2899 69.55L72.3799 78.51L79.9999 72.97L87.6199 78.51L84.7099 69.55L92.3299 64.01H82.9099L79.9999 55.05Z" fill="white"/>
          <path d="M133.33 55.05L130.42 64.01H121L128.62 69.55L125.71 78.51L133.33 72.97L140.96 78.51L138.04 69.55L145.67 64.01H136.25L133.33 55.05Z" fill="white"/>
          <path d="M186.67 55.05L183.75 64.01H174.33L181.96 69.55L179.04 78.51L186.67 72.97L194.29 78.51L191.38 69.55L199 64.01H189.58L186.67 55.05Z" fill="white"/>
          <path d="M240 55.05L237.09 64.01H227.66L235.29 69.55L232.38 78.51L240 72.97L247.62 78.51L244.71 69.55L252.34 64.01H242.91L240 55.05Z" fill="white"/>
          <path d="M293.33 55.05L290.42 64.01H281L288.62 69.55L285.71 78.51L293.33 72.97L300.96 78.51L298.04 69.55L305.67 64.01H296.25L293.33 55.05Z" fill="white"/>
          <path d="M26.6701 100.39L23.7501 109.35H14.3301L21.9501 114.89L19.0401 123.86L26.6701 118.32L34.2901 123.86L31.3801 114.89L39.0001 109.35H29.5801L26.6701 100.39Z" fill="white"/>
          <path d="M79.9999 100.39L77.0899 109.35H67.6699L75.2899 114.89L72.3799 123.86L79.9999 118.32L87.6199 123.86L84.7099 114.89L92.3299 109.35H82.9099L79.9999 100.39Z" fill="white"/>
          <path d="M133.33 100.39L130.42 109.35H121L128.62 114.89L125.71 123.86L133.33 118.32L140.96 123.86L138.04 114.89L145.67 109.35H136.25L133.33 100.39Z" fill="white"/>
          <path d="M186.67 100.39L183.75 109.35H174.33L181.96 114.89L179.04 123.86L186.67 118.32L194.29 123.86L191.38 114.89L199 109.35H189.58L186.67 100.39Z" fill="white"/>
          <path d="M240 100.39L237.09 109.35H227.66L235.29 114.89L232.38 123.86L240 118.32L247.62 123.86L244.71 114.89L252.34 109.35H242.91L240 100.39Z" fill="white"/>
          <path d="M293.33 100.39L290.42 109.35H281L288.62 114.89L285.71 123.86L293.33 118.32L300.96 123.86L298.04 114.89L305.67 109.35H296.25L293.33 100.39Z" fill="white"/>
          <path d="M26.6701 145.74L23.7501 154.7H14.3301L21.9501 160.24L19.0401 169.2L26.6701 163.66L34.2901 169.2L31.3801 160.24L39.0001 154.7H29.5801L26.6701 145.74Z" fill="white"/>
          <path d="M79.9999 145.74L77.0899 154.7H67.6699L75.2899 160.24L72.3799 169.2L79.9999 163.66L87.6199 169.2L84.7099 160.24L92.3299 154.7H82.9099L79.9999 145.74Z" fill="white"/>
          <path d="M133.33 145.74L130.42 154.7H121L128.62 160.24L125.71 169.2L133.33 163.66L140.96 169.2L138.04 160.24L145.67 154.7H136.25L133.33 145.74Z" fill="white"/>
          <path d="M186.67 145.74L183.75 154.7H174.33L181.96 160.24L179.04 169.2L186.67 163.66L194.29 169.2L191.38 160.24L199 154.7H189.58L186.67 145.74Z" fill="white"/>
          <path d="M240 145.74L237.09 154.7H227.66L235.29 160.24L232.38 169.2L240 163.66L247.62 169.2L244.71 160.24L252.34 154.7H242.91L240 145.74Z" fill="white"/>
          <path d="M293.33 145.74L290.42 154.7H281L288.62 160.24L285.71 169.2L293.33 163.66L300.96 169.2L298.04 160.24L305.67 154.7H296.25L293.33 145.74Z" fill="white"/>
          <path d="M29.5801 200.04L26.6701 191.08L23.7501 200.04H14.3301L21.9501 205.58L19.0401 214.54L26.6701 209L34.2901 214.54L31.3801 205.58L39.0001 200.04H29.5801Z" fill="white"/>
          <path d="M82.9099 200.04L79.9999 191.08L77.0899 200.04H67.6699L75.2899 205.58L72.3799 214.54L79.9999 209L87.6199 214.54L84.7099 205.58L92.3299 200.04H82.9099Z" fill="white"/>
          <path d="M136.25 200.04L133.33 191.08L130.42 200.04H121L128.62 205.58L125.71 214.54L133.33 209L140.96 214.54L138.04 205.58L145.67 200.04H136.25Z" fill="white"/>
          <path d="M189.58 200.04L186.67 191.08L183.75 200.04H174.33L181.96 205.58L179.04 214.54L186.67 209L194.29 214.54L191.38 205.58L199 200.04H189.58Z" fill="white"/>
          <path d="M242.91 200.04L240 191.08L237.09 200.04H227.66L235.29 205.58L232.38 214.54L240 209L247.62 214.54L244.71 205.58L252.34 200.04H242.91Z" fill="white"/>
          <path d="M296.25 200.04L293.33 191.08L290.42 200.04H281L288.62 205.58L285.71 214.54L293.33 209L300.96 214.54L298.04 205.58L305.67 200.04H296.25Z" fill="white"/>
          <path d="M53.33 32.38L50.42 41.34H41L48.62 46.88L45.71 55.84L53.33 50.3L60.96 55.84L58.04 46.88L65.67 41.34H56.24L53.33 32.38Z" fill="white"/>
          <path d="M106.67 32.38L103.75 41.34H94.3301L101.95 46.88L99.0401 55.84L106.67 50.3L114.29 55.84L111.38 46.88L119 41.34H109.58L106.67 32.38Z" fill="white"/>
          <path d="M160 32.38L157.09 41.34H147.66L155.29 46.88L152.38 55.84L160 50.3L167.62 55.84L164.71 46.88L172.34 41.34H162.91L160 32.38Z" fill="white"/>
          <path d="M213.33 32.38L210.42 41.34H201L208.62 46.88L205.71 55.84L213.33 50.3L220.96 55.84L218.04 46.88L225.67 41.34H216.25L213.33 32.38Z" fill="white"/>
          <path d="M266.67 32.38L263.75 41.34H254.33L261.95 46.88L259.04 55.84L266.67 50.3L274.29 55.84L271.38 46.88L279 41.34H269.58L266.67 32.38Z" fill="white"/>
          <path d="M53.33 77.72L50.42 86.68H41L48.62 92.22L45.71 101.18L53.33 95.64L60.96 101.18L58.04 92.22L65.67 86.68H56.24L53.33 77.72Z" fill="white"/>
          <path d="M106.67 77.72L103.75 86.68H94.3301L101.95 92.22L99.0401 101.18L106.67 95.64L114.29 101.18L111.38 92.22L119 86.68H109.58L106.67 77.72Z" fill="white"/>
          <path d="M160 77.72L157.09 86.68H147.66L155.29 92.22L152.38 101.18L160 95.64L167.62 101.18L164.71 92.22L172.34 86.68H162.91L160 77.72Z" fill="white"/>
          <path d="M213.33 77.72L210.42 86.68H201L208.62 92.22L205.71 101.18L213.33 95.64L220.96 101.18L218.04 92.22L225.67 86.68H216.25L213.33 77.72Z" fill="white"/>
          <path d="M266.67 77.72L263.75 86.68H254.33L261.95 92.22L259.04 101.18L266.67 95.64L274.29 101.18L271.38 92.22L279 86.68H269.58L266.67 77.72Z" fill="white"/>
          <path d="M53.33 123.06L50.42 132.03H41L48.62 137.56L45.71 146.53L53.33 140.99L60.96 146.53L58.04 137.56L65.67 132.03H56.24L53.33 123.06Z" fill="white"/>
          <path d="M106.67 123.06L103.75 132.03H94.3301L101.95 137.56L99.0401 146.53L106.67 140.99L114.29 146.53L111.38 137.56L119 132.03H109.58L106.67 123.06Z" fill="white"/>
          <path d="M160 123.06L157.09 132.03H147.66L155.29 137.56L152.38 146.53L160 140.99L167.62 146.53L164.71 137.56L172.34 132.03H162.91L160 123.06Z" fill="white"/>
          <path d="M213.33 123.06L210.42 132.03H201L208.62 137.56L205.71 146.53L213.33 140.99L220.96 146.53L218.04 137.56L225.67 132.03H216.25L213.33 123.06Z" fill="white"/>
          <path d="M266.67 123.06L263.75 132.03H254.33L261.95 137.56L259.04 146.53L266.67 140.99L274.29 146.53L271.38 137.56L279 132.03H269.58L266.67 123.06Z" fill="white"/>
          <path d="M56.24 177.37L53.33 168.41L50.42 177.37H41L48.62 182.91L45.71 191.87L53.33 186.33L60.96 191.87L58.04 182.91L65.67 177.37H56.24Z" fill="white"/>
          <path d="M109.58 177.37L106.67 168.41L103.75 177.37H94.3301L101.95 182.91L99.0401 191.87L106.67 186.33L114.29 191.87L111.38 182.91L119 177.37H109.58Z" fill="white"/>
          <path d="M162.91 177.37L160 168.41L157.09 177.37H147.66L155.29 182.91L152.38 191.87L160 186.33L167.62 191.87L164.71 182.91L172.34 177.37H162.91Z" fill="white"/>
          <path d="M216.25 177.37L213.33 168.41L210.42 177.37H201L208.62 182.91L205.71 191.87L213.33 186.33L220.96 191.87L218.04 182.91L225.67 177.37H216.25Z" fill="white"/>
          <path d="M269.58 177.37L266.67 168.41L263.75 177.37H254.33L261.95 182.91L259.04 191.87L266.67 186.33L274.29 191.87L271.38 182.91L279 177.37H269.58Z" fill="white"/>
          </g>
          <defs>
          <clipPath id="clip0">
          <rect width="800" height="421.05" fill="white"/>
          </clipPath>
          </defs>
          </svg>
        </div>
        <div className="fact-content">
          <h1>Made In the USA</h1>
          <p></p>
        </div>
      </div>
      </Fade>
      <Fade right>
      <div className="fact">
        <div className="fact-svg">
          <svg xmlns="http://www.w3.org/2000/svg" width="207" height="60" viewBox="0 0 207 60" fill="none">
          <path d="M40.3594 7.46094V59H32.2031V17.4453C30.7266 18.5 29.1328 19.4023 27.4219 20.1523C25.7344 20.8789 23.8008 21.5234 21.6211 22.0859V15.125C22.9805 14.6797 24.293 14.2109 25.5586 13.7188C26.8242 13.2266 28.0664 12.6758 29.2852 12.0664C30.5273 11.457 31.7695 10.7773 33.0117 10.0273C34.2773 9.27734 35.5781 8.42187 36.9141 7.46094H40.3594ZM67.1484 59.8438C61.8984 59.8438 57.7969 57.6992 54.8438 53.4102C51.9141 49.1211 50.4492 42.9219 50.4492 34.8125C50.4492 25.9062 51.9844 19.168 55.0547 14.5977C58.125 10.0273 62.5547 7.74219 68.3438 7.74219C79.4297 7.74219 84.9727 16.3555 84.9727 33.582C84.9727 42.1133 83.4023 48.6289 80.2617 53.1289C77.1445 57.6055 72.7734 59.8438 67.1484 59.8438ZM67.957 14.2461C61.8398 14.2461 58.7812 20.9844 58.7812 34.4609C58.7812 47.0703 61.7812 53.375 67.7812 53.375C73.6875 53.375 76.6406 46.9648 76.6406 34.1445C76.6406 20.8789 73.7461 14.2461 67.957 14.2461ZM107.156 59.8438C101.906 59.8438 97.8047 57.6992 94.8516 53.4102C91.9219 49.1211 90.457 42.9219 90.457 34.8125C90.457 25.9062 91.9922 19.168 95.0625 14.5977C98.1328 10.0273 102.562 7.74219 108.352 7.74219C119.438 7.74219 124.98 16.3555 124.98 33.582C124.98 42.1133 123.41 48.6289 120.27 53.1289C117.152 57.6055 112.781 59.8438 107.156 59.8438ZM107.965 14.2461C101.848 14.2461 98.7891 20.9844 98.7891 34.4609C98.7891 47.0703 101.789 53.375 107.789 53.375C113.695 53.375 116.648 46.9648 116.648 34.1445C116.648 20.8789 113.754 14.2461 107.965 14.2461ZM142.348 33.8984C138.785 33.8984 135.949 32.7617 133.84 30.4883C131.73 28.1914 130.676 25.1328 130.676 21.3125C130.676 17.1406 131.789 13.8594 134.016 11.4688C136.266 9.05469 139.289 7.84766 143.086 7.84766C146.766 7.84766 149.613 8.96094 151.629 11.1875C153.668 13.4141 154.688 16.543 154.688 20.5742C154.688 24.6055 153.551 27.8398 151.277 30.2773C149.004 32.6914 146.027 33.8984 142.348 33.8984ZM142.84 12.7695C140.918 12.7695 139.395 13.5078 138.27 14.9844C137.168 16.4609 136.617 18.4883 136.617 21.0664C136.617 23.5977 137.156 25.5664 138.234 26.9727C139.336 28.3789 140.836 29.082 142.734 29.082C144.633 29.082 146.121 28.3555 147.199 26.9023C148.277 25.4258 148.816 23.3867 148.816 20.7852C148.816 18.2539 148.277 16.2852 147.199 14.8789C146.145 13.4727 144.691 12.7695 142.84 12.7695ZM176.484 8.58594L144.141 59.3516H139.113L171.422 8.58594H176.484ZM171.949 59.7734C168.387 59.7734 165.551 58.6367 163.441 56.3633C161.332 54.0664 160.277 51.0078 160.277 47.1875C160.277 43.0156 161.391 39.7344 163.617 37.3438C165.867 34.9297 168.891 33.7227 172.688 33.7227C176.367 33.7227 179.215 34.8359 181.23 37.0625C183.27 39.2891 184.289 42.418 184.289 46.4492C184.289 50.4805 183.152 53.7148 180.879 56.1523C178.605 58.5664 175.629 59.7734 171.949 59.7734ZM172.441 38.6445C170.52 38.6445 168.996 39.3828 167.871 40.8594C166.77 42.3359 166.219 44.3633 166.219 46.9414C166.219 49.4727 166.758 51.4414 167.836 52.8477C168.938 54.2539 170.438 54.957 172.336 54.957C174.234 54.957 175.723 54.2305 176.801 52.7773C177.879 51.3008 178.418 49.2617 178.418 46.6602C178.418 44.1289 177.879 42.1602 176.801 40.7539C175.746 39.3477 174.293 38.6445 172.441 38.6445Z"/>
          </svg>
        </div>
        
        <div className="fact-content">
          <h1>Unique Benefits</h1>
          <p>
            The only 100% silicone pacifier that will eliminate the chance of finger entrapment and finger strangulation.
          </p>
        </div>
      </div>
      </Fade>
      <Fade left>
      <div className="fact">
      <div className="fact-svg">
      <svg xmlns="http://www.w3.org/2000/svg" width="150" height="150" viewBox="0 0 380 380" fill="none">
<circle cx="190" cy="190" r="190" fill="#0C8CCD"/>
<path d="M121.623 90V224.713C121.623 234.835 122.069 241.314 122.959 244.148C123.85 246.901 125.713 249.169 128.547 250.951C131.381 252.732 135.916 253.623 142.152 253.623H145.918V258.117H59.1865V253.623H63.5595C70.6049 253.623 75.6257 252.813 78.622 251.193C81.6183 249.574 83.6429 247.347 84.6956 244.513C85.7484 241.678 86.2748 235.078 86.2748 224.713V139.318C86.2748 131.705 85.9104 126.968 85.1815 125.105C84.4527 123.162 83.076 121.542 81.0515 120.247C79.1079 118.87 76.8404 118.182 74.249 118.182C70.119 118.182 65.0981 119.477 59.1865 122.069L57 117.696L117.615 90H121.623Z" fill="white"/>
<path d="M179.916 177.622V187.772C179.916 189.751 180.033 191.002 180.267 191.524C180.519 192.028 180.951 192.432 181.563 192.738C182.193 193.044 183.335 193.197 184.991 193.197V194.196H166.392V193.197C168.084 193.197 169.227 193.044 169.821 192.738C170.432 192.414 170.855 192.001 171.089 191.497C171.341 190.993 171.467 189.751 171.467 187.772V164.017C171.467 162.037 171.341 160.796 171.089 160.292C170.855 159.77 170.432 159.356 169.821 159.05C169.209 158.744 168.066 158.591 166.392 158.591V157.592H182.346C187.601 157.592 191.371 158.528 193.656 160.4C195.942 162.271 197.084 164.611 197.084 167.418C197.084 169.794 196.346 171.827 194.871 173.519C193.395 175.21 191.362 176.362 188.77 176.974C187.025 177.406 184.073 177.622 179.916 177.622ZM179.916 159.698V175.516C180.51 175.552 180.96 175.57 181.266 175.57C183.461 175.57 185.153 174.922 186.341 173.627C187.529 172.313 188.122 170.289 188.122 167.553C188.122 164.836 187.529 162.847 186.341 161.588C185.153 160.328 183.38 159.698 181.023 159.698H179.916Z" fill="white"/>
<path d="M206.721 156.729C207.891 156.729 208.881 157.143 209.69 157.97C210.5 158.78 210.905 159.761 210.905 160.913C210.905 162.064 210.491 163.045 209.663 163.855C208.854 164.665 207.873 165.07 206.721 165.07C205.569 165.07 204.589 164.665 203.779 163.855C202.969 163.045 202.564 162.064 202.564 160.913C202.564 159.761 202.969 158.78 203.779 157.97C204.589 157.143 205.569 156.729 206.721 156.729ZM210.5 168.957V188.959C210.5 190.741 210.707 191.884 211.121 192.387C211.535 192.873 212.345 193.152 213.551 193.224V194.196H199.919V193.224C201.034 193.188 201.862 192.864 202.402 192.253C202.762 191.839 202.942 190.741 202.942 188.959V174.221C202.942 172.439 202.735 171.305 202.321 170.819C201.907 170.316 201.106 170.028 199.919 169.956V168.957H210.5Z" fill="white"/>
<path d="M237.413 180.672H223.565C223.727 184.019 224.618 186.665 226.238 188.608C227.479 190.102 228.973 190.849 230.719 190.849C231.798 190.849 232.779 190.552 233.661 189.958C234.543 189.346 235.488 188.257 236.495 186.692L237.413 187.286C236.045 190.075 234.534 192.055 232.878 193.224C231.222 194.376 229.306 194.952 227.128 194.952C223.385 194.952 220.551 193.512 218.625 190.633C217.078 188.311 216.304 185.432 216.304 181.995C216.304 177.784 217.438 174.437 219.705 171.953C221.991 169.452 224.663 168.201 227.722 168.201C230.278 168.201 232.491 169.254 234.363 171.359C236.252 173.447 237.269 176.551 237.413 180.672ZM230.773 178.864C230.773 175.966 230.611 173.978 230.287 172.898C229.981 171.818 229.495 170.999 228.829 170.442C228.451 170.118 227.947 169.956 227.317 169.956C226.382 169.956 225.617 170.415 225.023 171.332C223.961 172.934 223.43 175.129 223.43 177.919V178.864H230.773Z" fill="white"/>
<path d="M261.195 187.691L262.031 188.338C260.844 190.57 259.359 192.235 257.577 193.332C255.814 194.412 253.933 194.952 251.936 194.952C248.571 194.952 245.88 193.683 243.865 191.146C241.849 188.608 240.841 185.558 240.841 181.995C240.841 178.558 241.759 175.534 243.595 172.925C245.808 169.776 248.858 168.201 252.746 168.201C255.355 168.201 257.424 168.858 258.954 170.172C260.502 171.485 261.276 172.952 261.276 174.572C261.276 175.597 260.961 176.416 260.331 177.028C259.719 177.64 258.909 177.946 257.901 177.946C256.84 177.946 255.958 177.595 255.256 176.893C254.572 176.191 254.149 174.94 253.987 173.141C253.879 172.007 253.618 171.215 253.204 170.765C252.791 170.316 252.305 170.091 251.747 170.091C250.883 170.091 250.145 170.549 249.533 171.467C248.598 172.853 248.13 174.976 248.13 177.838C248.13 180.213 248.508 182.49 249.263 184.667C250.019 186.827 251.054 188.437 252.368 189.499C253.357 190.273 254.527 190.66 255.877 190.66C256.759 190.66 257.595 190.453 258.387 190.039C259.179 189.625 260.115 188.842 261.195 187.691Z" fill="white"/>
<path d="M286.542 180.672H272.694C272.856 184.019 273.747 186.665 275.366 188.608C276.608 190.102 278.102 190.849 279.847 190.849C280.927 190.849 281.908 190.552 282.79 189.958C283.671 189.346 284.616 188.257 285.624 186.692L286.542 187.286C285.174 190.075 283.662 192.055 282.007 193.224C280.351 194.376 278.435 194.952 276.257 194.952C272.514 194.952 269.68 193.512 267.754 190.633C266.206 188.311 265.433 185.432 265.433 181.995C265.433 177.784 266.566 174.437 268.834 171.953C271.119 169.452 273.792 168.201 276.851 168.201C279.406 168.201 281.62 169.254 283.491 171.359C285.381 173.447 286.398 176.551 286.542 180.672ZM279.901 178.864C279.901 175.966 279.739 173.978 279.415 172.898C279.109 171.818 278.624 170.999 277.958 170.442C277.58 170.118 277.076 169.956 276.446 169.956C275.51 169.956 274.745 170.415 274.152 171.332C273.09 172.934 272.559 175.129 272.559 177.919V178.864H279.901Z" fill="white"/>
<path d="M165.718 258.117V257.119H166.932C167.994 257.119 168.804 256.957 169.362 256.633C169.938 256.291 170.36 255.832 170.63 255.256C170.792 254.878 170.873 253.744 170.873 251.855V227.776C170.873 225.905 170.774 224.735 170.576 224.267C170.378 223.799 169.974 223.394 169.362 223.052C168.768 222.693 167.958 222.513 166.932 222.513H165.718V221.514H182.103C186.476 221.514 189.994 222.108 192.657 223.295C195.915 224.753 198.38 226.958 200.054 229.909C201.745 232.86 202.591 236.198 202.591 239.924C202.591 242.497 202.177 244.872 201.349 247.05C200.522 249.209 199.451 251 198.137 252.422C196.823 253.825 195.303 254.959 193.575 255.823C191.866 256.669 189.769 257.326 187.286 257.793C186.188 258.009 184.46 258.117 182.103 258.117H165.718ZM179.673 223.592V252.152C179.673 253.663 179.745 254.59 179.889 254.932C180.033 255.274 180.276 255.535 180.618 255.715C181.104 255.985 181.806 256.12 182.724 256.12C185.729 256.12 188.023 255.094 189.607 253.043C191.767 250.271 192.846 245.97 192.846 240.14C192.846 235.443 192.108 231.69 190.633 228.883C189.463 226.688 187.96 225.194 186.125 224.402C184.829 223.844 182.679 223.574 179.673 223.592Z" fill="white"/>
<path d="M228.181 244.593H214.333C214.495 247.941 215.386 250.586 217.006 252.53C218.247 254.023 219.741 254.77 221.487 254.77C222.566 254.77 223.547 254.473 224.429 253.879C225.311 253.268 226.256 252.179 227.263 250.613L228.181 251.207C226.814 253.996 225.302 255.976 223.646 257.146C221.991 258.297 220.074 258.873 217.897 258.873C214.153 258.873 211.319 257.434 209.394 254.554C207.846 252.233 207.072 249.353 207.072 245.916C207.072 241.705 208.206 238.358 210.473 235.875C212.759 233.373 215.431 232.122 218.49 232.122C221.046 232.122 223.259 233.175 225.131 235.281C227.02 237.368 228.037 240.472 228.181 244.593ZM221.541 242.785C221.541 239.888 221.379 237.899 221.055 236.819C220.749 235.74 220.263 234.921 219.597 234.363C219.219 234.039 218.715 233.877 218.086 233.877C217.15 233.877 216.385 234.336 215.791 235.254C214.729 236.855 214.198 239.051 214.198 241.84V242.785H221.541Z" fill="white"/>
<path d="M247.32 232.176L247.725 240.787H246.807C245.709 238.232 244.566 236.486 243.379 235.551C242.209 234.615 241.039 234.147 239.869 234.147C239.132 234.147 238.502 234.399 237.98 234.903C237.458 235.389 237.197 235.955 237.197 236.603C237.197 237.089 237.377 237.557 237.737 238.007C238.313 238.745 239.923 240.014 242.569 241.813C245.214 243.595 246.951 245.115 247.779 246.375C248.624 247.617 249.047 249.011 249.047 250.559C249.047 251.963 248.696 253.339 247.995 254.689C247.293 256.039 246.303 257.074 245.025 257.793C243.748 258.513 242.335 258.873 240.787 258.873C239.582 258.873 237.971 258.495 235.955 257.739C235.416 257.542 235.047 257.443 234.849 257.443C234.255 257.443 233.76 257.892 233.364 258.792H232.473L232.041 249.722H232.959C233.769 252.098 234.876 253.879 236.279 255.067C237.701 256.255 239.042 256.849 240.301 256.849C241.165 256.849 241.867 256.588 242.407 256.066C242.965 255.526 243.244 254.878 243.244 254.122C243.244 253.259 242.974 252.512 242.434 251.882C241.894 251.252 240.688 250.298 238.817 249.02C236.063 247.113 234.282 245.655 233.472 244.647C232.284 243.172 231.69 241.543 231.69 239.762C231.69 237.818 232.356 236.063 233.688 234.498C235.038 232.914 236.981 232.122 239.519 232.122C240.886 232.122 242.209 232.455 243.487 233.121C243.973 233.391 244.368 233.526 244.674 233.526C244.998 233.526 245.259 233.463 245.457 233.337C245.655 233.193 245.97 232.806 246.402 232.176H247.32Z" fill="white"/>
<path d="M258.981 220.65C260.151 220.65 261.141 221.064 261.95 221.892C262.76 222.702 263.165 223.682 263.165 224.834C263.165 225.986 262.751 226.967 261.923 227.776C261.114 228.586 260.133 228.991 258.981 228.991C257.829 228.991 256.849 228.586 256.039 227.776C255.229 226.967 254.824 225.986 254.824 224.834C254.824 223.682 255.229 222.702 256.039 221.892C256.849 221.064 257.829 220.65 258.981 220.65ZM262.76 232.878V252.881C262.76 254.662 262.967 255.805 263.381 256.309C263.795 256.795 264.605 257.074 265.811 257.146V258.117H252.179V257.146C253.294 257.11 254.122 256.786 254.662 256.174C255.022 255.76 255.202 254.662 255.202 252.881V238.142C255.202 236.36 254.995 235.227 254.581 234.741C254.167 234.237 253.366 233.949 252.179 233.877V232.878H262.76Z" fill="white"/>
<path d="M284.49 233.175H292.993V236.144H288.161C289.043 237.026 289.655 237.827 289.997 238.547C290.429 239.519 290.645 240.535 290.645 241.597C290.645 243.397 290.141 244.962 289.133 246.294C288.143 247.608 286.785 248.643 285.057 249.398C283.348 250.136 281.827 250.505 280.495 250.505C280.387 250.505 279.307 250.46 277.256 250.37C276.446 250.37 275.762 250.64 275.204 251.18C274.665 251.702 274.395 252.332 274.395 253.07C274.395 253.717 274.638 254.248 275.123 254.662C275.627 255.076 276.437 255.283 277.553 255.283L282.223 255.229C286.002 255.229 288.602 255.643 290.024 256.471C292.058 257.623 293.074 259.395 293.074 261.789C293.074 263.318 292.606 264.704 291.671 265.946C290.735 267.205 289.502 268.132 287.972 268.726C285.651 269.608 282.979 270.049 279.955 270.049C277.688 270.049 275.618 269.824 273.747 269.374C271.875 268.942 270.534 268.33 269.725 267.538C268.915 266.764 268.51 265.946 268.51 265.082C268.51 264.254 268.816 263.507 269.428 262.841C270.058 262.193 271.218 261.645 272.91 261.195C270.57 260.043 269.401 258.441 269.401 256.39C269.401 255.148 269.878 253.942 270.831 252.773C271.785 251.603 273.297 250.586 275.366 249.722C272.955 248.841 271.209 247.68 270.13 246.24C269.05 244.8 268.51 243.136 268.51 241.246C268.51 238.781 269.518 236.648 271.533 234.849C273.549 233.031 276.14 232.122 279.307 232.122C280.981 232.122 282.709 232.473 284.49 233.175ZM279.82 233.796C278.777 233.796 277.895 234.327 277.175 235.389C276.455 236.432 276.095 238.61 276.095 241.921C276.095 244.602 276.446 246.447 277.148 247.455C277.868 248.445 278.714 248.939 279.685 248.939C280.765 248.939 281.665 248.445 282.385 247.455C283.105 246.465 283.464 244.54 283.464 241.678C283.464 238.457 283.06 236.261 282.25 235.092C281.674 234.228 280.864 233.796 279.82 233.796ZM278.228 261.843C276.392 261.843 275.177 261.996 274.584 262.301C273.558 262.859 273.045 263.615 273.045 264.569C273.045 265.487 273.576 266.315 274.638 267.052C275.699 267.808 277.697 268.186 280.63 268.186C283.132 268.186 285.093 267.853 286.515 267.187C287.954 266.521 288.674 265.586 288.674 264.38C288.674 263.93 288.539 263.552 288.269 263.246C287.783 262.706 287.046 262.337 286.056 262.139C285.084 261.942 282.475 261.843 278.228 261.843Z" fill="white"/>
<path d="M306.247 232.878V236.144C307.543 234.741 308.785 233.724 309.972 233.094C311.16 232.446 312.438 232.122 313.806 232.122C315.443 232.122 316.802 232.581 317.882 233.499C318.961 234.399 319.681 235.524 320.041 236.873C320.329 237.899 320.473 239.87 320.473 242.785V252.611C320.473 254.554 320.644 255.769 320.986 256.255C321.346 256.723 322.084 257.02 323.199 257.146V258.117H310.431V257.146C311.385 257.02 312.069 256.624 312.483 255.958C312.771 255.508 312.915 254.392 312.915 252.611V241.381C312.915 239.312 312.834 238.007 312.672 237.467C312.51 236.927 312.231 236.513 311.835 236.225C311.457 235.919 311.034 235.767 310.566 235.767C309.019 235.767 307.579 236.873 306.247 239.087V252.611C306.247 254.5 306.418 255.697 306.76 256.201C307.12 256.705 307.777 257.02 308.731 257.146V258.117H295.963V257.146C297.024 257.038 297.78 256.696 298.23 256.12C298.536 255.724 298.689 254.554 298.689 252.611V238.358C298.689 236.45 298.509 235.263 298.149 234.795C297.807 234.327 297.078 234.021 295.963 233.877V232.878H306.247Z" fill="white"/>
</svg>
        </div>
        <div className="fact-content">
          <h1>One Piece Design</h1>
          <p>The patent pending Comfort Stem®, with its inverted stem technology,
lowers pressure when force is applied to the nipple, resulting in a 0-36
month safety rating and a very comfortable feel for your baby. The same
comforting feel is experienced across all age ranges with no chance of
rejection in contrast to some pacifiers that require moving up to stiffer, higher age rated models.
</p>
        </div>
      </div>
      </Fade>
    </div>
    <div className="products-container home-section">
    {products.map(product => {
      return (
        <Fade bottom><ProductCard shouldShowLearnMore={true}name={product.name} price={product.price} description={product.description} src={product.image.file.url}/></Fade>
      )
    })}
    </div>
    <Fade bottom><div className="faq-container home-section">
      {questions.map(question => {
        return (
          <details>
            <summary>{question.question}</summary>
            <div>{documentToReactComponents(question.answer.json, options)}</div>
          </details>
        )
      })}
    </div>
    </Fade>
    <div className="award-container home-section">
      {awards.map(award => {
        return (
          <div><Fade bottom><img src={award.image.file.url}></img></Fade></div>
        )
      })}
    </div>
    <Fade>
    <div className="home-video home-section">
    <Player
              playsInline
              poster={VIDEOPOSTER}
              src={VIDEO}
              
            >
              <BigPlayButton position="center" />
            </Player>
    </div>
    </Fade>
    <Fade>
    <div className="our-mission home-section">
      <div className="our-mission-image">
        <img src={john}></img>
      </div>
      <div className="our-mission-content">
        <p>Our mission at Oralign Baby is to discover and develop novel designs and solutions that have a meaningful benefit for the children of our world. All of our discovery and design is based on peer-reviewed clinical science and testing that is reproducible while all of our claims and benefits are equally verifiable.</p>
        <Link to="/our-story" ><button>Read More</button></Link>
      </div>
    </div>
    </Fade>
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



export default IndexPage
