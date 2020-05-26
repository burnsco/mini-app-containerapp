import React from "react"

import Layout from "../components/layout"
import Image from "../components/image"
import { Heading } from "theme-ui"
import SEO from "../components/seo"

const dice = () => (
  <Layout>
    <SEO title="Roll-Dice" />
    <Heading>Dice</Heading>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
  </Layout>
)

export default dice
