import React, { useState } from "react"
import Layout from "../components/layout"
import Lotto from "../components/Apps/Lottery"
import { Heading, Text } from "theme-ui"

export default () => {
  const [generate, setGenerate] = useState(false)
  const refreshApp = () => {
    setGenerate(!generate)
  }
  return (
    <Layout>
      <Heading>Pokemon Search</Heading>
      <Text>Fetch Pokemon at build time &</Text>
      <Text>Fetch more at run time</Text>
    </Layout>
  )
}
