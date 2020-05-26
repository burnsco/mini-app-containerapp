/** @jsx jsx */
import { jsx, Grid } from "theme-ui"
import { Link } from "gatsby"

export default () => (
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
      <Link to="/privacy-policy" sx={{ color: "inherit" }}>
        Privacy Policy
      </Link>
      <div sx={{ mx: 1 }} />
      <Link to="/terms-of-use" sx={{ color: "inherit" }}>
        Terms of Use
      </Link>
      <div sx={{ mx: 1 }} />© 2019 Jane Doe
    </div>
  </footer>
)
