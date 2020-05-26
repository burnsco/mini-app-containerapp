/** @jsx jsx */
import { jsx, Grid } from "theme-ui"
import { Link } from "gatsby"
import Container from "./Container"

export default () => (
  <Container variant="layout.footer">
    <footer
      sx={{
        fontSize: 1,
        variant: "styles.footer",
      }}
    >
      <div
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          p: 3,
        }}
      >
        <div sx={{ mx: 1 }} />© 2019 Corey Burns
      </div>
    </footer>
  </Container>
)
