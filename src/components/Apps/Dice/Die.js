import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faDiceOne,
  faDiceTwo,
  faDiceThree,
  faDiceFour,
  faDiceFive,
  faDiceSix,
} from "@fortawesome/free-solid-svg-icons"

const SelectDice = ({ value }) => {
  if (value === "one") return <FontAwesomeIcon icon={faDiceOne} size="6x" />
  if (value === "two") return <FontAwesomeIcon icon={faDiceTwo} size="6x" />
  if (value === "three") return <FontAwesomeIcon icon={faDiceThree} size="6x" />
  if (value === "four") return <FontAwesomeIcon icon={faDiceFour} size="6x" />
  if (value === "five") return <FontAwesomeIcon icon={faDiceFive} size="6x" />
  if (value === "six") return <FontAwesomeIcon icon={faDiceSix} size="6x" />
}

const Die = ({ value }) => <SelectDice value={value} />

export default Die
