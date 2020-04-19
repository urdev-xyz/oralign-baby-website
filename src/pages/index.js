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
          <p>Though similar to a traditional laptop in appearance and size, the KidKomputer V16 is designed to provide the pre-teen crowd with their first computing experience.</p>
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
          <h1>100% med grade material</h1>
          <p>MyPaci’s® advanced geometric design took three years to test and
engineer to achieve our performance goals. We chose a 100%
medical grade silicone that’s been used for years in implantable medical
devices. This silicone has such a lengthy safety record the FDA no longer
requires testing for leachable medical products. Whereas some pacifiers
are made by compression molding of silicone with fillers added in. We use only 100% silicone liquid that is injected into the mold.
</p>
        </div>
      </div>
      </Fade>
      <Fade left>
      <div className="fact">
      <div className="fact-svg">
      <svg xmlns="http://www.w3.org/2000/svg" width="" height="100" viewBox="0 0 1094 1500" >
<path d="M740.07 1419.56L901 1500V1287.08H1094V0H0V1287.08H579.19V1500L740.07 1419.56ZM836.6 1395.93L740.07 1347.63L643.54 1395.93V1153H668.68L740.07 1204.91L811.53 1153H836.6V1395.93ZM740.07 1094C651.33 1094 579.19 1021.82 579.19 933.11C579.19 844.4 651.33 772.23 740.07 772.23C828.81 772.23 901 844.43 901 933.13C901 1021.83 828.81 1094 740.07 1094ZM64.35 1222.73V64.35H1029.66V1222.73H901V1149.73L927.21 1069.03L998.67 1017.12L971.33 933.12L998.67 849.12L927.21 797.21L899.94 713.21H811.53L740.07 661.29L668.68 713.21H580.32L553.04 797.21L481.59 849.12L508.92 933.12L481.59 1017.12L553 1069L579.15 1149.51V1222.69L64.35 1222.73Z" />
<path d="M933.13 193.06H160.88V257.41H933.13V193.06Z" />
<path d="M933.13 321.77H160.88V386.12H933.13V321.77Z" />
<path d="M933.13 450.48H160.88V514.83H933.13V450.48Z" />
<path d="M547 579.19H160.88V643.54H547V579.19Z"/>
<path d="M418.3 707.89H160.88V772.24H418.3V707.89Z" />
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
        <Fade bottom><ProductCard name={product.name} price={product.price} description={product.description} src={product.image.file.url}/></Fade>
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
