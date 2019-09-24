/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useState } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql, Link } from "gatsby"
import HamburgerMenu from 'react-hamburger-menu'
import oralignLogo from '../images/oralignLogo.svg'

import "./layout.scss"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
      allContentfulAnnouncement {
        nodes {
          show,
          message,
          link
        }
      }
      allContentfulNavigation {
        nodes {
          name,
          items {
            nav {
              title,
              nesting,
              path,
              nested {
                title,
                path
              }
            }
          }
        }
      }
    }
  `)

  const [state, setState] = useState({open: false})


  const announcement = data.allContentfulAnnouncement.nodes[0]
  const navigation = data.allContentfulNavigation.nodes[0].items.nav

  const handleClick= function() {
    setState({
        open: !state.open
    });
}

  return (
    <div className="navigation box-shadow">
      <nav>
        {announcement.show ? <div className="announcment"><a target="_Blank" href={announcement.link}>{announcement.message}</a></div> : <></>}
        <nav className="main-navigation">
          <div className="space"></div>
          <img src={oralignLogo}></img>
          <div className="space">
            <HamburgerMenu
                isOpen={state.open}
                menuClicked={handleClick.bind(this)}
                width={30}
                height={20}
                strokeWidth={3}
                rotate={0}
                color='blue'
                borderRadius={0}
                animationDuration={0.5}
            />
          </div>
        </nav>
        <nav className={`sub-navigation ${state.open ? `menu-open` : `menu-closed`}`}>
          {navigation.map(item => {
            if (item.nesting === false) {
              return <Link className="navigation-item" to={ item.path }>{item.title}</Link>
            }
            else if (item.nesting === true) {

            }
          })}
        </nav>
      </nav>
  
        <main>{children}</main>

    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
