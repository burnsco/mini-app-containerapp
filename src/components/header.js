/** @jsx jsx */
import { jsx, Heading, Flex } from "theme-ui"
import ToggleColorMode from "./ToggleColorMode"
import Container from "./Container"

export default () => (
  <Container variant="layout.header">
    <Flex
      sx={{
        alignItems: "center",
      }}
    >
      <Heading variant="textStyles.display">Mini Apps</Heading>
      <div sx={{ mx: "auto" }}>
        <ToggleColorMode>Toggle</ToggleColorMode>
      </div>
    </Flex>
  </Container>
)
