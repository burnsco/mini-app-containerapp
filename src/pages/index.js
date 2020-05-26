import React from "react"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import { Text } from "theme-ui"

const IndexPage = () => (
  <Layout>
    <SEO title="CB" />

    <Text>Home Page</Text>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
  </Layout>
)

export default IndexPage
