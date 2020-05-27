import React, { useState } from "react"
import Layout from "../components/layout"
import "../components/Apps/Dice/Dice.css"
import Die from "../components/Apps/Dice/Die"

// 1) Roll the Dice
// 2) Generate a random number(1-6) for each Die
// 3) Pass that number into the die
// 4) Finish!
// 5) Bonus, keep a tally of all the rolls! using hooks!?

const App = () => {
  const [dieOne, setDieOne] = useState("one")
  const [dieTwo, setDieTwo] = useState("six")
  let [rolling, setRolling] = useState(false)

  const rollDice = () => {
    // set the state of 'rolling' to true
    setRolling((rolling = true))
    // instansiate die values in word form for class changes
    let dieValues = ["one", "two", "three", "four", "five", "six"]
    // change die one value
    setDieOne(dieValues[(Math.random() * dieValues.length) | 0])
    // change die two value
    setDieTwo(dieValues[(Math.random() * dieValues.length) | 0])
    // set the rolling state back to 'false'
    setTimeout(rolling => {
      setRolling((rolling = false))
    }, 1000)
    return
  }

  return (
    <Layout>
      <div className={rolling ? "dice shakeDice" : "dice"}>
        <Die value={dieOne} />
        <Die value={dieTwo} />
      </div>
      <button
        type="button"
        disabled={rolling}
        style={{ fontSize: 20, width: 200, height: 70, marginTop: 50 }}
        onClick={() => {
          rollDice()
        }}
      >
        <p>{rolling ? "Rolling..." : "Roll Dice"}</p>
      </button>
    </Layout>
  )
}

export default App
