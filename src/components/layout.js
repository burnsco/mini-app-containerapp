/** @jsx jsx */
import { jsx, Flex } from 'theme-ui'
import Header from './Header'
import Container from './Container'
import NavLinkList from './NavLinkList'
import Footer from './Footer'

export const Layout = ({ children }) => (
  <Flex
    sx={{
      '*,\n  *:before,\n  *:after': {
        boxSizing: 'border-box',
        WebkitBoxSizing: 'border-box',
        MozBoxSizing: 'border-box',
      },
      minHeight: '100vh',
      fontSize: [0, 1, 2],
      flexDirection: 'column',
      webkitFontSmoothing: 'antialiased',
      mozOsxFontSmoothing: 'grayscale',
      textRendering: 'optimizeLegibility',
      overflowX: 'hidden',
      wordWrap: 'break-word',
      fontKerning: 'normal',
      mozFontFeatureSettings: ['case', 1, 'rlig', 1, 'calt', 0],
      msFontFeatureSettings: ['case', 1, 'rlig', 1, 'calt', 0],
      webkitFontFeatureSettings: ['case', 1, 'rlig', 1, 'calt', 0],
      fontFeatureSettings: ['case', 1, 'rlig', 1, 'calt', 0],
    }}
  >
    <Header />

    <aside>
      <NavLinkList />
    </aside>

    <main sx={{ variant: 'layout.main' }}>
      <Container>{children}</Container>
    </main>

    <Footer />
  </Flex>
)
export default Layout
