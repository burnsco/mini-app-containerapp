/** @jsx jsx */
import { jsx, Grid } from "theme-ui"
import Header from "./Header"
import Container from "./Container"
import NavLinkList from "./NavLinkList"
import Footer from "./Footer"

export default props => (
  <Grid
    sx={{
      "*,\n  *:before,\n  *:after": {
        boxSizing: "border-box",
        WebkitBoxSizing: "border-box",
        MozBoxSizing: "border-box",
      },
      "@media screen and (min-width: 500px)": {
        margin: "0 auto",
        gridTemplateColumns: "1fr 3fr",
        aside: { cssFloat: "left", width: "19.1489%" },
        main: { cssFloat: "right", width: "79.7872%" },
        header: { gridColumn: "1 / -1", clear: "both" },
        footer: { gridColumn: "1 / -1", clear: "both" },
      },
      gridgap: 3,
      minHeight: "100vh",
      webkitFontSmoothing: "antialiased",
      mozOsxFontSmoothing: "grayscale",
      textRendering: "optimizeLegibility",
      overflowX: "hidden",
      wordWrap: "break-word",
      fontKerning: "normal",
      mozFontFeatureSettings: ["case", 1, "rlig", 1, "calt", 0],
      msFontFeatureSettings: ["case", 1, "rlig", 1, "calt", 0],
      webkitFontFeatureSettings: ["case", 1, "rlig", 1, "calt", 0],
      fontFeatureSettings: ["case", 1, "rlig", 1, "calt", 0],
      variant: "layout.root",
    }}
  >
    <header>
      <Header />
    </header>
    <aside>
      <Container>
        <NavLinkList />
      </Container>
    </aside>

    <main>
      <Container>{props.children}</Container>
    </main>
    <Footer />
  </Grid>
)
