/** @jsx jsx */
import { jsx, Flex } from "theme-ui"
import Container from "./Container"
import PropTypes from "prop-types"

const Layout = props => (
  <Flex
    sx={{
      "*,\n  *:before,\n  *:after": {
        boxSizing: "border-box",
        WebkitBoxSizing: "border-box",
        MozBoxSizing: "border-box",
      },
      flexDirection: "column",
      minHeight: "100vh",
      scrollBehavior: "smooth",
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
    }}
  >
    <header
      sx={{
        width: "100%",
      }}
    >
      <Container>Header</Container>
    </header>

    <main
      sx={{
        width: "100%",
        flex: "1 1 auto",
      }}
    >
      <Container>{props.children}</Container>
    </main>

    <footer
      sx={{
        width: "100%",
      }}
    >
      <Container>Footer</Container>
    </footer>
  </Flex>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
