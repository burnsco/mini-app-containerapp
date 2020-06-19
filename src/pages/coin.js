import { useState } from "react"
/** @jsx jsx */
import { jsx, Heading } from "theme-ui"
import "../styles/coin_flip.css"
import Layout from "../components/layout"

import Heads from "../images/heads.png"
import Tails from "../images/tails.png"

export default () => {
  let [flipping, setFlipping] = useState(false)
  let [flip, setFlip] = useState(false)
  let [heads, setHeads] = useState(0)
  let [tails, setTails] = useState(0)
  let [flips, setFlips] = useState(0)

  const flipCoin = () => {
    let head = [true, false]
    setFlipping(true)
    setFlips((flips += 1))

    let result = head[(Math.random() * head.length) | 0]

    if (result === true) {
      setFlip((flip = true))
      setHeads((heads += 1))
    } else {
      setFlip((flip = false))
      setTails((tails += 1))
    }
    setFlipping(false)
  }

  return (
    <Layout>
      <div
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        <Heading as="h1" sx={{ height: "30%" }}>
          Flip & Count
        </Heading>
        <div
          className={flipping ? "falling_coin" : null}
          sx={{ height: "30%" }}
        >
          <img
            src={flip ? Heads : Tails}
            height="100px"
            width="100px"
            alt="Heads"
          />
        </div>

        <p sx={{ height: "30%" }}>
          {" "}
          <button type="button" onClick={() => flipCoin()}>
            Flip Me!
          </button>
        </p>
        <p>
          Out of <strong sx={{ textDecoration: "underline" }}>{flips}</strong>{" "}
          flips, there have been <em sx={{ color: "primary" }}>{heads} </em>
          heads and
          <em sx={{ color: "secondary" }}> {tails}</em> tails
        </p>
      </div>
    </Layout>
  )
}
