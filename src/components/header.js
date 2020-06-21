/** @jsx jsx */
import { jsx, Heading, Flex } from "theme-ui"
import { useSiteMetadata } from "../hooks/useSiteMetaData.js"
import ToggleColorMode from "./ToggleColorMode"
import Container from "./Container"

export default () => {
  const { title } = useSiteMetadata()

  return (
    <Container variant="layout.header">
      <Flex
        sx={{
          alignItems: "center",
        }}
      >
        <Heading variant="textStyles.display">{title}</Heading>
        <div sx={{ mx: "auto" }}>
          <ToggleColorMode>Toggle Theme</ToggleColorMode>
        </div>
      </Flex>
    </Container>
  )
}
