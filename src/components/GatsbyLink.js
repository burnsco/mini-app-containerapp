/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"

export default props => (
  <Link
    {...props}
    activeClassName="active"
    sx={{
      textDecoration: "none",
      fontWeight: "bold",
      color: "inherit",
      "&:hover": {
        borderRadius: 3,
        bg: "highlight",
      },
      "&.active": {
        color: "text",
        borderRadius: 3,
        bg: "highlight",
      },
    }}
  />
)
