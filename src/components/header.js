/** @jsx jsx */
import { jsx, Grid, Heading } from "theme-ui"
import { Link } from "gatsby"

export default () => (
  <div
    sx={{
      variant: "styles.header",
    }}
  >
    <div
      sx={{
        maxWidth: "container",
        mx: "auto",
        px: [4, 5, 6],
        display: "flex",
        alignItems: "baseline",
      }}
    >
      <Heading variant="textStyles.display">Mini Apps</Heading>
    </div>
  </div>
)
