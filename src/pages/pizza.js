import React from "react"

import Layout from "../components/layout"
import Image from "../components/image"
import { Text } from "theme-ui"
import SEO from "../components/seo"

const pizza = () => (
  <Layout>
    <SEO title="Pizza Calculator" />

    <Text>pizza</Text>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
  </Layout>
)

export default pizza
