import React from 'react'

import Layout from '../components/layout'
import MatCreator from '../components/mat-creator'

const QuotePage = () => (
  <Layout>
    <h1>Get a Quote</h1>
    <MatCreator />
    <a
      href="https://www.kickstarter.com/projects/overpoweredgamemats/136550215?ref=633652&token=a0eaaea7"
      target="_blank"
      rel="noopener noreferrer"
    >
      Back to the Kickstarter
    </a>
  </Layout>
)

export default QuotePage
