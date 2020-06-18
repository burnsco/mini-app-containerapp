import React, { useState } from "react"
import Layout from "../components/layout"

import Heads from "../images/heads.png"
import Tails from "../images/tails.png"

export default () => {
  let [flip, setFlip] = useState(false)
  let [heads, setHeads] = useState(0)
  let [tails, setTails] = useState(0)
  let [flips, setFlips] = useState(0)

  const flipCoin = () => {
    let head = [true, false]
    setFlips((flips += 1))
    let result = head[(Math.random() * head.length) | 0]
    if (result === true) {
      setFlip((flip = true))
      setHeads((heads += 1))
    } else {
      setFlip((flip = false))
      setTails((tails += 1))
    }
  }

  return (
    <Layout>
      <h1>Count Flips</h1>
      <img src={flip ? Heads : Tails} height="18%" width="18%" alt="Heads" />
      <p>
        {" "}
        <button type="button" onClick={() => flipCoin()}>
          Flip Me!
        </button>
      </p>
      <p>
        Out of <strong>{flips}</strong> flips, there have been <em>{heads} </em>
        heads and
        <em> {tails}</em> tails
      </p>
    </Layout>
  )
}
