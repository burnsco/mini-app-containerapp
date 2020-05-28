import React from "react"
import { Input, Button, Flex } from "theme-ui"

const AddItem = ({ handleChange, handleSubmit, input }) => (
  <Flex>
    <Input value={input} onChange={e => handleChange(e)} />
    <Button primary onClick={() => handleSubmit()}>
      Add
    </Button>
  </Flex>
)

export default AddItem
