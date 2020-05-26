import React from "react"

import Layout from "../components/Layout"
import Image from "../components/image"
import { Text } from "theme-ui"
import SEO from "../components/seo"

const rolodex = () => (
  <Layout>
    <SEO title="Monsters Rolodex" />

    <Text>rolodex</Text>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
  </Layout>
)

export default rolodex
