import React from 'react'

import { Heading } from 'theme-ui'
import Layout from '../components/layout'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <SEO title="Mini App Container Site" />
    <Heading>
      A place to store the apps I first made in my coding journey.
    </Heading>
    <Heading>
      Also a place to experiment with new things and store my small apps I will
      make in the future
    </Heading>
  </Layout>
)

export default IndexPage
