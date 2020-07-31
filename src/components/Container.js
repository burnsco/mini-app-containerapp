/** @jsx jsx */
import { jsx, Box } from 'theme-ui'

export default function Container(props) {
  return (
    <Box
      {...props}
      sx={{
        maxWidth: 'container',
        mx: 'auto',
        px: 3,
      }}
    />
  )
}
