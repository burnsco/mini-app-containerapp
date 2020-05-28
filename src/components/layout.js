/** @jsx jsx */
import { jsx, Flex } from "theme-ui"
import Header from "./Header"
import Container from "./Container"
import NavLinkList from "./NavLinkList"
import Footer from "./Footer"

export default props => (
  <Flex
    sx={{
      "*,\n  *:before,\n  *:after": {
        boxSizing: "border-box",
        WebkitBoxSizing: "border-box",
        MozBoxSizing: "border-box",
      },
      minHeight: "100vh",
      fontSize: [0, 1, 1],
      flexDirection: "column",
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
      <NavLinkList />
    </aside>

    <main sx={{ variant: "layout.main" }}>
      <Container>{props.children}</Container>
    </main>

    <Footer />
  </Flex>
)
