import React, { useState } from "react"
import Layout from "../components/layout"
import Lotto from "../components/Apps/Lottery"
import { Heading } from "theme-ui"

export default () => {
  const [generate, setGenerate] = useState(false)
  const refreshApp = () => {
    setGenerate(!generate)
  }
  return (
    <Layout>
      <Heading>Lotto Generator Component</Heading>
      <Lotto
        title="Mini Daily"
        numBalls={7}
        maxNum={99}
        generate={refreshApp}
      />
    </Layout>
  )
}
