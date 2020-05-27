import React from "react"
import styled from "@emotion/styled"
import { Checkbox } from "theme-ui"

const CheckboxContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
`

const Icon = styled.svg`
  fill: none;
  stroke: white;
  stroke-width: 2px;
`

const Checked = ({ packed, togglePacked, value, id }) => (
  <label>
    <CheckboxContainer>
      <Checkbox
        onChange={() => togglePacked(id)}
        checked={packed}
        name="packed"
        value={packed}
      />
      <Checkbox
        onChange={() => togglePacked(id)}
        checked={packed}
        name="packed"
        value={packed}
      >
        <Icon viewBox="0 0 24 24">
          <polyline points="20 6 9 17 4 12" />
        </Icon>
      </Checkbox>
    </CheckboxContainer>
  </label>
)

export default Checkbox
