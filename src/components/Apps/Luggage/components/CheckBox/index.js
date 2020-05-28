import React from "react"
import { Checkbox, Label } from "theme-ui"

const Checked = ({ packed, togglePacked, value, id }) => (
  <Label htmlFor="packed">
    <Checkbox
      onChange={() => togglePacked(id)}
      checked={packed}
      name="packed"
      value={packed}
    />
  </Label>
)

export default Checkbox
