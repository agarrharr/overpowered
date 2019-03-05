import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`board games`, `card games`, `mat`]} />
    <h1>Homepage</h1>
    <Link to="/quote/">Get a quote</Link>
  </Layout>
)

export default IndexPage
