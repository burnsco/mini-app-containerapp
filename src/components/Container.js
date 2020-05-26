/** @jsx jsx */
import { jsx, Box } from "theme-ui"

export default props => (
  <Box
    {...props}
    sx={{
      maxWidth: "container",
      mx: "auto",
      px: 3,
    }}
  />
)
