import React, { useState } from 'react'
import { Heading, Label, Input } from 'theme-ui'
import Layout from '../components/layout'
import Lotto from '../components/Apps/Lottery'

export default function Lottery() {
  const [generate, setGenerate] = useState(false)
  const [amountOfBalls, setAmountOfBalls] = useState(7)
  const [numberLimit, setNumberLimit] = useState(99)

  const refreshApp = () => {
    setGenerate(!generate)
  }

  const changeBalls = e => setAmountOfBalls(e.target.value)
  const changeMaxNum = e => setNumberLimit(e.target.value)

  return (
    <Layout>
      <Heading>Generate Lottery Numbers</Heading>

      <Label># of Balls: </Label>
      <Input type="number" defaultValue="7" onChange={changeBalls} />

      <Label>Max Number: </Label>
      <Input type="number" defaultValue="99" onChange={changeMaxNum} />

      <Lotto
        title="Mini Daily"
        numBalls={amountOfBalls}
        maxNum={numberLimit}
        generate={refreshApp}
      />
    </Layout>
  )
}
