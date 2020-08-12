import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import {PageHeader} from "../components/page-header"
import SEO from "../components/seo"

import john from '../images/cap1.jpg'

import "./styles/index.scss"

const SecondPage = () => (
  <Layout>
    <div className="page-container">
        <PageHeader pageTitle="Our Story"/>
        <div className="page story-page">
          <img src={john}>

          </img>
          <div>
            <p>Hi, I’m Dr. John</p> 
            <p>I am a pediatric dentist who had an idea to make a better pacifier back in 2002.  After many years of correcting dental growth problems in thousands of children from  pacifier use, I started to study the designs of various pacifiers and how those  conventional pacifiers were negatively impacting the oral development of my patients. After encouragement from my family I took my innovative pacifier idea on a long  journey where I connected with the Dr. Browns baby bottle company. Together we  developed the PreVent pacifier and later I helped in the designs of the initial line of Dr. Browns teethers. Now, I am on a more adventurous journey. In 2017, I launched my company Oralign Baby with the goal to create pacifiers with innovative designs that make a difference. The difference being to simply do it better and to provide a true value. I believe that we have accomplished that in our first product with the award winning MyPaci® Classic Plus® pacifier. I am proud to be a company that is built on innovation and firsts with the care 
            of our “little customers” at our core. The same care that I have given to all of my “little patients” over the last 
            thirty years.</p>
          </div>
        </div>
    </div>
  </Layout>
)

export default SecondPage
