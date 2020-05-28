import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Heading } from "theme-ui"

const IndexPage = () => (
  <Layout>
    <SEO title="CB" />

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
