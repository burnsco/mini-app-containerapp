/** @jsx jsx */
import { jsx } from "theme-ui"

import Container from "./Container"
import { useSiteMetadata } from "../hooks/useSiteMetaData"

export default () => {
  const { author } = useSiteMetadata()
  return (
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
          <div sx={{ mx: 1 }} />© 2020 {author}
        </div>
      </footer>
    </Container>
  )
}
