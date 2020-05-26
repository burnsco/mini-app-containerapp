/** @jsx jsx */
import { jsx, Grid } from "theme-ui"

export default ({ gap = 2, ...props }) => (
  <Grid
    {...props}
    sx={{
      gridGap: gap,
    }}
  />
)
