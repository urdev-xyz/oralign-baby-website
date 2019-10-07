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
import Helmet from 'react-helmet'
import Fade from 'react-reveal/Fade';



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
      allContentfulSocial {
        nodes {
          socialName,
          socialLink,
          socialIcon {
            file {
              url
            }
          }
        }
      }
    }
  `)

  const [state, setState] = useState({open: false})


  const announcement = data.allContentfulAnnouncement.nodes[0]
  const navigation = data.allContentfulNavigation.nodes[0].items.nav
  const socials = data.allContentfulSocial.nodes

  console.log(socials)


  const handleClick= function() {
    setState({
        open: !state.open
    });
}

  return (
    <div className="layout">
      <Helmet>
          <meta charSet="utf-8" />
          <script>{`(function(d, s, id) { var js, fjs = d.getElementsByTagName(s)[0]; if (d.getElementById(id)) return; js = d.createElement(s); js.id = id; js.src = "//affil.walmart.com/buttons/buynow.min.js"; fjs.parentNode.insertBefore(js, fjs); }(document, 'script', 'walmart-buynow-js'));`}</script>
        </Helmet>
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
            <div className="navigation-social-container">
            {socials.map(social => {
              return <Link to='/' className="navigation-social">
                <img src={social.socialIcon.file.url}></img>
              </Link>
            })}
            </div>
          </nav>
        </nav>
      </div>
      
      <main>{children}</main>

      <footer>
        <div className="footer">
          <svg width="" height="32" viewBox="0 0 829 179" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0)">
            <path d="M37.7853 75.584C32.6549 75.6639 27.5599 74.7219 22.7973 72.8127C18.4173 71.0052 14.4368 68.3512 11.084 65.0027C7.61528 61.4067 4.95313 57.1123 3.2751 52.4059C1.23895 47.7961 0.126395 42.8317 0.000407487 37.7937C-0.113346 32.5781 0.829193 27.3934 2.7713 22.5516C4.52739 18.0699 7.18528 13.9967 10.5802 10.5847C13.933 7.23618 17.9135 4.58218 22.2935 2.77467C27.2129 0.798526 32.486 -0.144772 37.7853 0.00338254C42.7464 -0.0107458 47.6639 0.930125 52.2695 2.77467C56.6495 4.58218 60.6299 7.23618 63.9828 10.5847C67.4515 14.1807 70.1136 18.4751 71.7916 23.1814C73.6519 27.827 74.5929 32.7895 74.5625 37.7937C74.5961 42.7981 73.655 47.7613 71.7916 52.4059C70.1136 57.1123 67.4515 61.4067 63.9828 65.0027C60.6299 68.3512 56.6495 71.0052 52.2695 72.8127C47.6639 74.6572 42.7464 75.5981 37.7853 75.584V75.584ZM37.7853 67.774C41.7357 67.8341 45.6503 67.0166 49.2467 65.3806C52.6114 63.8875 55.6498 61.7475 58.1891 59.0822C60.406 56.0552 62.03 52.6359 62.9752 49.0048C64.4979 45.4548 65.3519 41.654 65.4942 37.7937C65.4155 33.7223 64.5606 29.7034 62.9752 25.9527C61.6224 22.4833 59.6603 19.2838 57.1815 16.5051C54.6422 13.8399 51.6038 11.6999 48.2391 10.2068C44.625 8.62506 40.7227 7.80853 36.7777 7.80853C32.8327 7.80853 28.9304 8.62506 25.3163 10.2068C21.9516 11.6999 18.9132 13.8399 16.3738 16.5051C13.8951 19.2838 11.933 22.4833 10.5802 25.9527C9.33814 29.7699 8.82543 33.7868 9.06878 37.7937C9.01959 41.707 9.70309 45.5949 11.084 49.2567C12.406 52.7413 14.3714 55.9462 16.8776 58.7043C19.417 61.3695 22.4554 63.5096 25.8201 65.0027C29.5908 66.627 33.6853 67.3598 37.7853 67.1441V67.774Z"/>
            <path d="M93.2017 1.76488H111.464C114.862 1.57707 118.268 1.57707 121.666 1.76488C124.829 2.06684 127.906 2.96439 130.735 4.4102C133.442 5.71267 135.716 7.7683 137.284 10.3307C139.161 13.481 140.039 17.1263 139.803 20.786C139.908 23.0906 139.549 25.3928 138.749 27.5564C137.948 29.72 136.722 31.7012 135.143 33.3828C131.713 36.7345 127.298 38.8979 122.548 39.5552L142.322 73.1885H131.868L112.598 41.0668H101.64V73.1885H93.2017V1.76488ZM101.64 33.2568H109.197H116.502C118.862 33.1883 121.197 32.7636 123.43 31.9971C125.481 31.3258 127.311 30.1061 128.719 28.47C130.226 26.5385 130.946 24.1083 130.735 21.6678C130.841 19.547 130.315 17.4423 129.223 15.6213C128.494 14.0542 127.365 12.7073 125.949 11.7163C123.999 10.8242 121.912 10.2705 119.777 10.0787C117.646 9.81601 115.501 9.68979 113.354 9.70084H101.64V33.2568Z" />
            <path d="M183.005 1.77051H190.94L221.294 73.1942H211.344L204.164 55.6847H168.521L161.09 73.1942H151.14L183.005 1.77051ZM186.783 12.7297L171.795 47.7487H201.519L186.783 12.7297Z" />
            <path d="M235.777 1.77051H244.216V64.7543H277.089V72.6903H235.777V1.77051Z" />
            <path d="M291.197 1.77051H299.635V73.1942H291.197V1.77051Z" />
            <path d="M383.139 68.2745C379.216 70.5745 374.97 72.2729 370.544 73.3132C365.956 74.6597 361.216 75.4216 356.437 75.5806C351.197 75.6467 345.989 74.75 341.072 72.9353C336.409 71.2265 332.129 68.6154 328.477 65.2512C325.043 61.9195 322.378 57.8785 320.668 53.4103C318.841 48.4142 318.027 43.1042 318.275 37.7903C318.198 32.5127 319.228 27.2776 321.298 22.4222C323.161 17.9418 325.951 13.9064 329.484 10.5813C333.134 7.24332 337.417 4.67306 342.079 3.02322C346.711 1.08861 351.671 0.0622577 356.689 0C361.306 0.0150618 365.894 0.737251 370.292 2.14145C374.672 3.57451 378.646 6.03665 381.879 9.3216L375.582 15.9979C373.109 13.3748 370.103 11.3128 366.765 9.95144C363.365 8.56543 359.732 7.83871 356.06 7.80999C352.165 7.77152 348.305 8.54368 344.724 10.0774C341.29 11.5216 338.167 13.6177 335.53 16.2498C332.947 18.9494 330.896 22.1119 329.484 25.5714C328.051 29.4815 327.367 33.6269 327.469 37.7903C327.461 41.7933 328.187 45.764 329.61 49.5053C331.021 53.0027 333.071 56.2066 335.656 58.9528C338.338 61.5886 341.503 63.684 344.976 65.1253C348.974 66.7388 353.261 67.5107 357.571 67.3927C360.627 67.3577 363.669 66.9774 366.639 66.259C369.428 65.5536 372.1 64.4506 374.574 62.9838V41.0654H358.201V33.2555H383.391L383.139 68.2745Z" />
            <path d="M405.809 1.77051H416.515L457.826 61.1013V1.77051H466.013V73.1942H455.307L414.5 13.8634V73.1942H405.935L405.809 1.77051Z" />
            <path d="M522.312 1.77051H544.102C547.026 1.79495 549.94 2.1328 552.792 2.77825C555.469 3.2664 558.032 4.2489 560.349 5.6755C562.54 7.04906 564.392 8.90088 565.765 11.0921C567.156 13.638 567.851 16.5057 567.78 19.406C567.909 23.1437 566.704 26.8054 564.38 29.7353C561.982 32.5052 558.832 34.5184 555.311 35.5298V35.5298C557.492 35.773 559.619 36.3686 561.609 37.2934C563.546 38.2275 565.296 39.5083 566.773 41.0724C568.251 42.6368 569.407 44.4775 570.173 46.489C570.978 48.5805 571.405 50.7985 571.433 53.0393C571.566 56.4898 570.691 59.9042 568.914 62.8648C567.291 65.3684 565.087 67.4428 562.49 68.9112C559.71 70.4868 556.688 71.5933 553.548 72.1864C550.257 72.7243 546.932 73.019 543.598 73.0682H522.312V1.77051ZM530.751 32.0027H542.464C544.436 32.1321 546.413 32.1321 548.384 32.0027C550.442 31.7723 552.421 31.0836 554.178 29.9873C555.695 29.122 556.989 27.9142 557.956 26.4602C558.915 24.5917 559.391 22.5132 559.342 20.4137C559.397 18.5538 558.916 16.7172 557.956 15.1231C557.05 13.6798 555.735 12.5394 554.178 11.8479C552.567 10.9753 550.822 10.3792 549.014 10.0844H543.346H530.751V32.0027ZM530.751 65.2582H545.109C547.159 65.5112 549.232 65.5112 551.281 65.2582C553.252 64.8495 555.13 64.0808 556.823 62.9908C558.477 62.1103 559.868 60.8062 560.853 59.2117C561.898 57.4633 562.422 55.4532 562.364 53.4172C562.418 51.2219 561.897 49.0507 560.853 47.1188C559.907 45.5121 558.617 44.1353 557.075 43.0879C555.376 42.0616 553.494 41.377 551.533 41.0724C549.467 40.6075 547.352 40.396 545.235 40.4426H530.751V65.2582Z" />
            <path d="M614.004 1.77051H621.939L652.293 73.1942H642.343L635.038 55.6847H599.52L591.963 73.1942H582.391L614.004 1.77051ZM617.782 12.7297L602.794 47.7487H631.889L617.782 12.7297Z" />
            <path d="M666.776 1.77051H688.566C691.491 1.78702 694.405 2.12496 697.256 2.77825C699.933 3.2664 702.496 4.2489 704.813 5.6755C707.004 7.04906 708.856 8.90088 710.229 11.0921C711.674 13.6168 712.373 16.4998 712.244 19.406C712.373 23.1437 711.168 26.8054 708.844 29.7353C706.446 32.5052 703.296 34.5184 699.775 35.5298V35.5298C701.993 35.7888 704.159 36.3835 706.199 37.2934C708.077 38.2623 709.78 39.5397 711.237 41.0724C714.228 44.3404 715.89 48.6087 715.897 53.0393C716.03 56.4898 715.154 59.9042 713.378 62.8648C711.755 65.3684 709.551 67.4428 706.954 68.9112C704.174 70.4868 701.152 71.5933 698.012 72.1864C694.721 72.7243 691.396 73.019 688.062 73.0682H666.776V1.77051ZM675.215 32.0027H686.928C688.899 32.1321 690.877 32.1321 692.848 32.0027C694.66 31.802 696.415 31.2456 698.012 30.3652C699.529 29.4999 700.823 28.2921 701.79 26.8381C702.749 24.9696 703.225 22.8911 703.176 20.7916C703.269 18.944 702.832 17.1083 701.916 15.501C701.035 14.1303 699.822 13.0039 698.39 12.2258C696.903 11.2074 695.236 10.4807 693.478 10.0844H687.81H675.215V32.0027ZM675.215 65.2582H689.573C691.623 65.5112 693.695 65.5112 695.745 65.2582C697.722 64.87 699.604 64.0998 701.287 62.9908C702.941 62.1103 704.332 60.8062 705.317 59.2117C706.362 57.4633 706.886 55.4532 706.828 53.4172C706.974 51.0528 706.45 48.6952 705.317 46.615C704.371 45.0082 703.081 43.6314 701.538 42.584C699.876 41.5784 698.038 40.8947 696.123 40.5685C694.056 40.1096 691.942 39.8982 689.825 39.9387H675.215V65.2582Z" />
            <path d="M752.172 42.458L725.597 1.77051H736.302L756.328 34.0182L776.984 1.77051H787.186L760.611 42.458V73.1942H752.172V42.458Z" />
            <path d="M806.708 4.41392H800.411V21.4195H798.144V4.41392H791.846V2.39844H806.708V4.41392Z" />
            <path d="M809.352 2.39844H812.627L818.672 17.2626L825.725 2.39844H829V21.4195H826.733V5.42166L819.806 21.4195H818.672L811.619 5.42166V21.4195H809.352V2.39844Z" />
            <path d="M38.6672 169.56L44.8388 162.254C49.7885 167.014 56.3614 169.716 63.2274 169.812C69.5249 169.812 73.5553 166.915 73.5553 162.506C73.5553 158.349 71.2882 156.082 60.9603 153.562C50.6324 151.043 41.5641 146.886 41.5641 136.179C41.6408 133.75 42.2114 131.363 43.241 129.163C44.2706 126.962 45.7376 124.994 47.5526 123.379C49.3675 121.765 51.4924 120.536 53.7976 119.77C56.1027 119.003 58.5399 118.715 60.9603 118.921C68.6263 118.691 76.125 121.191 82.1198 125.975L76.5781 133.659C72.087 129.97 66.5153 127.847 60.7084 127.613C54.7888 127.613 51.2622 130.762 51.2622 134.541C51.2622 138.95 53.9071 140.966 65.1166 143.611C76.3262 146.256 83.7572 151.043 83.7572 160.742C83.7572 172.457 75.5705 178.882 62.9755 178.882C53.9919 178.926 45.3182 175.6 38.6672 169.56V169.56Z" />
            <path d="M93.2027 149.151C93.1334 145.124 93.8796 141.124 95.3964 137.393C96.9132 133.662 99.1691 130.277 102.029 127.44C104.888 124.604 108.292 122.376 112.035 120.89C115.778 119.404 119.783 118.69 123.808 118.793C127.79 118.691 131.752 119.394 135.456 120.859C139.16 122.325 142.53 124.524 145.364 127.323C148.198 130.122 150.439 133.465 151.95 137.151C153.462 140.837 154.214 144.79 154.162 148.773V148.773C154.197 152.779 153.426 156.751 151.894 160.453C150.362 164.155 148.1 167.51 145.245 170.319C142.389 173.129 138.997 175.334 135.271 176.805C131.545 178.276 127.561 178.981 123.557 178.879C119.591 178.998 115.643 178.315 111.948 176.871C108.253 175.428 104.888 173.252 102.053 170.477C99.2189 167.701 96.9741 164.381 95.4533 160.717C93.9325 157.052 93.167 153.118 93.2027 149.151V149.151ZM143.582 149.151C143.684 146.475 143.245 143.805 142.29 141.302C141.336 138.8 139.886 136.515 138.028 134.586C136.17 132.658 133.942 131.124 131.477 130.076C129.012 129.029 126.361 128.49 123.682 128.492C121.037 128.507 118.422 129.055 115.993 130.105C113.565 131.155 111.373 132.684 109.55 134.602C107.727 136.519 106.31 138.785 105.384 141.263C104.458 143.742 104.042 146.382 104.16 149.025C104.042 151.702 104.464 154.374 105.403 156.883C106.342 159.392 107.778 161.686 109.624 163.627C111.471 165.568 113.69 167.116 116.149 168.178C118.608 169.24 121.256 169.795 123.934 169.81C126.586 169.779 129.204 169.215 131.633 168.151C134.062 167.087 136.252 165.546 138.073 163.619C139.895 161.691 141.31 159.417 142.235 156.932C143.159 154.446 143.575 151.8 143.457 149.151H143.582Z" />
            <path d="M163.735 149.145C163.7 145.139 164.472 141.167 166.004 137.465C167.536 133.764 169.797 130.408 172.653 127.599C175.509 124.79 178.901 122.584 182.627 121.114C186.353 119.643 190.337 118.937 194.341 119.039C198.323 118.937 202.285 119.64 205.989 121.106C209.693 122.571 213.063 124.77 215.897 127.569C218.731 130.368 220.971 133.711 222.483 137.397C223.995 141.083 224.747 145.036 224.695 149.019V149.019C224.73 153.025 223.959 156.998 222.427 160.699C220.895 164.401 218.633 167.756 215.777 170.566C212.922 173.375 209.53 175.58 205.804 177.051C202.078 178.522 198.094 179.227 194.089 179.126C190.103 179.246 186.133 178.555 182.421 177.096C178.709 175.636 175.332 173.439 172.494 170.636C169.656 167.833 167.417 164.483 165.911 160.789C164.406 157.095 163.666 153.134 163.735 149.145V149.145ZM214.115 149.145C214.217 146.469 213.777 143.799 212.823 141.296C211.869 138.794 210.419 136.51 208.561 134.581C206.703 132.652 204.474 131.118 202.009 130.071C199.544 129.023 196.893 128.485 194.215 128.487C191.57 128.501 188.954 129.049 186.526 130.099C184.098 131.149 181.906 132.678 180.083 134.596C178.26 136.513 176.843 138.779 175.917 141.258C174.991 143.736 174.574 146.376 174.693 149.019V149.019C174.574 151.696 174.997 154.368 175.936 156.877C176.875 159.387 178.311 161.68 180.157 163.621C182.003 165.562 184.223 167.11 186.682 168.172C189.141 169.235 191.789 169.79 194.467 169.804C197.129 169.79 199.761 169.238 202.205 168.182C204.648 167.126 206.854 165.587 208.688 163.658C210.523 161.729 211.95 159.449 212.882 156.955C213.815 154.461 214.234 151.805 214.115 149.145V149.145Z" />
            <path d="M248.247 129.241H229.858V119.793H277.089V129.241H258.574V177.99H248.247V129.241Z" />
            <path d="M287.796 119.793H298.124V143.979H325.833V119.793H336.035V177.99H325.833V153.552H298.124V177.99H287.796V119.793Z" />
            <path d="M351.022 119.793H394.223V128.989H361.224V144.105H390.445V153.3H361.224V168.92H394.601V177.99H351.022V119.793Z" />
            <path d="M431.629 119.794H457.827C463.348 119.461 468.778 121.317 472.941 124.959C474.271 126.19 475.32 127.694 476.015 129.368C476.711 131.042 477.037 132.847 476.971 134.658V134.658C476.941 137.351 476.126 139.976 474.628 142.213C473.129 144.451 471.011 146.202 468.533 147.255C471.811 147.875 474.768 149.628 476.886 152.206C479.004 154.785 480.149 158.026 480.12 161.363C480.12 171.693 471.555 177.235 458.583 177.235H431.629V119.794ZM455.686 144.988C462.235 144.988 466.643 142.342 466.643 137.052C466.643 132.391 462.991 129.619 456.441 129.619H441.705V145.114L455.686 144.988ZM458.709 169.551C465.636 169.551 469.918 166.906 469.918 161.615C469.918 156.703 466.014 153.805 457.323 153.805H441.705V169.677L458.709 169.551Z" />
            <path d="M491.203 119.793H534.404V128.989H501.909V144.105H531.129V153.3H501.909V168.92H535.285V177.99H491.203V119.793Z" />
            <path d="M561.607 129.241H543.219V119.793H590.45V129.241H571.935V177.99H561.607V129.241Z" />
            <path d="M615.515 129.241H597V119.793H644.357V129.241H625.842V177.99H615.515V129.241Z" />
            <path d="M654.938 119.793H698.138V128.989H665.265V144.105H694.486V153.3H665.265V168.92H698.642V177.99H654.938V119.793Z" />
            <path d="M710.732 119.795H736.678C742.846 119.438 748.907 121.519 753.555 125.59C756.731 129.004 758.449 133.524 758.341 138.187V138.187C758.486 142.289 757.174 146.31 754.638 149.538C752.102 152.766 748.506 154.992 744.487 155.822L760.231 177.866H747.636L733.277 157.586H720.682V177.866H710.354L710.732 119.795ZM735.922 148.642C743.227 148.642 748.517 144.863 748.517 138.942C748.517 132.644 743.983 129.243 735.922 129.243H721.06V148.642H735.922Z" />
            <path d="M776.857 121.934H770.559V138.562H768.292V121.934H761.995V119.793H776.857V121.934Z" />
            <path d="M779.626 119.793H782.901L789.451 134.783L796 119.793H799.275V138.562H797.007V122.942L790.08 138.562H788.695L781.894 122.564V138.562H779.626V119.793Z" />
            </g>
            <defs>
            <clipPath id="clip0">
            <rect width="829" height="179" fill="white"/>
            </clipPath>
            </defs>
          </svg>
          <ul>
            <h1>Pages</h1>
          {navigation.map(item => {
              if (item.nesting === false) {
                return <li><Link className="" to={ item.path }>{item.title}</Link></li>
              }
              else if (item.nesting === true) {

              }
            })}
            </ul>
            <p>copyright 2020</p>
        </div>
      </footer>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
