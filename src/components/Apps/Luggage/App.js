import React, { useState } from "react"
import uuid from "uuid"
import LuggageTracker from "./container/LuggageTracker"

import { INITIAL_STATE } from "./data"

function LuggageTrackerApp() {
  const [input, setInput] = useState("")
  const [items, setItems] = useState(INITIAL_STATE)

  const handleChange = e => {
    setInput(e.target.value)
  }
  const handleSubmit = () => {
    if (input !== "") {
      const itemz = [
        ...items,
        {
          id: uuid(),
          title: input,
          packed: false,
        },
      ]
      setInput("")
      setItems(itemz)
    }
  }
  const removeItem = id => {
    const itemz = [...items.filter(item => item.id !== id)]
    setItems(itemz)
  }
  const togglePacked = id => {
    const itemz = [...items]
    const index = items.findIndex(item => item.id === id)
    items[index].packed = !items[index].packed
    setItems(itemz)
  }
  const toggleAll = () => {
    const itemz = [...items]
    items.forEach(item => (item.packed = false))
    setItems(itemz)
  }

  const unpackedItems = items.filter(item => !item.packed)
  const packedItems = items.filter(item => item.packed)

  return (
    <LuggageTracker
      input={input}
      handleSubmit={handleSubmit}
      handleChange={handleChange}
      packedItems={packedItems}
      unpackedItems={unpackedItems}
      removeItem={removeItem}
      togglePacked={togglePacked}
      toggleAll={toggleAll}
    />
  )
}

export default LuggageTrackerApp
