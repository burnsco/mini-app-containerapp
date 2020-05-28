/** @jsx jsx */
import { jsx, useColorMode, Button } from "theme-ui"

const modes = ["deep", "swiss", "dark", "cool"]

export default props => {
  const [mode, setMode] = useColorMode()
  return (
    <Button
      {...props}
      onClick={e => {
        const index = modes.indexOf(mode)
        const next = modes[(index + 1) % modes.length]
        setMode(next)
      }}
    />
  )
}
