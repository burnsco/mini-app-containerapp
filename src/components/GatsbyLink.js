/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"

export default props => (
  <Link
    {...props}
    activeClassName="active"
    sx={{
      textDecoration: "none",
      fontSize: [1, 1, 2],
      fontWeight: "bold",
      color: "inherit",
      "&:hover": {
        color: "primary",
      },
      "&.active": {
        color: "primary",
      },
    }}
  />
)
