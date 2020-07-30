import React, { useState } from 'react'
import Layout from '../components/layout'
import '../components/Apps/Dice/Dice.css'
import Die from '../components/Apps/Dice/Die'

export default function App() {
  const [dieOne, setDieOne] = useState('one')
  const [dieTwo, setDieTwo] = useState('six')
  const [rolling, setRolling] = useState(false)

  const rollDice = () => {
    setRolling(true)

    const dieValues = ['one', 'two', 'three', 'four', 'five', 'six']

    setDieOne(dieValues[Math.random() * dieValues.length])

    setDieTwo(dieValues[Math.random() * dieValues.length])

    setTimeout(() => {
      setRolling(false)
    }, 1000)
  }

  return (
    <Layout>
      <div className={rolling ? 'dice shakeDice' : 'dice'}>
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
        <p>{rolling ? 'Rolling...' : 'Roll Dice'}</p>
      </button>
    </Layout>
  )
}
