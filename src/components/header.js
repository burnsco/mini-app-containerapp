/** @jsx jsx */
import { jsx, Heading, Flex } from 'theme-ui'
import { useSiteMetadata } from '../hooks/useSiteMetaData.js'
import ToggleColorMode from './ToggleColorMode'
import Container from './Container'

export default function Header() {
  const { title } = useSiteMetadata()

  return (
    <Container as="header" variant="layout.header">
      <Flex
        sx={{
          alignItems: 'center',
        }}
      >
        <Heading variant="textStyles.display">{title}</Heading>
        <div sx={{ ml: 5 }}>
          <ToggleColorMode>Toggle Theme</ToggleColorMode>
        </div>
      </Flex>
    </Container>
  )
}
