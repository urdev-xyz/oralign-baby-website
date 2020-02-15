import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import {PageHeader} from "../components/page-header"
import SEO from "../components/seo"

import "./styles/index.scss"

const Product = () => (
  <Layout>
    <div className="page-container">
        <PageHeader pageTitle="Product"/>
        <div className="page">
            {}
        </div>
    </div>
  </Layout>
)

export default Product