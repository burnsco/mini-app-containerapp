/** @jsx jsx */
import { jsx, Grid, NavLink, Heading, Button } from "theme-ui"
import GatsbyLink from "./GatsbyLink"
import ToggleColorMode from "./ToggleColorMode"
import StyledButton from "./StyledButton"

const apps = [
  { id: "0", title: "Home", path: "/" },
  { id: "1", title: "Page 2", path: "/page-2" },
  { id: "2", title: "asdfsdf", path: "/page-1" },
  { id: "3", title: "test1", path: "/page-1" },
  { id: "4", title: "test1", path: "/page-1" },
  { id: "5", title: "test1", path: "/page-1" },
  { id: "6", title: "test1", path: "/page-1" },
  { id: "7", title: "test1", path: "/page-1" },
  { id: "8", title: "test1", path: "/page-1" },
  { id: "9", title: "test1", path: "/page-1" },
]

export default () => (
  <Grid
    sx={{
      gridGap: 2,
      gridTemplateColumns: `repeat(auto-fit, minmax(128px, 1fr))`,
    }}
  >
    <ToggleColorMode>Toggle</ToggleColorMode>

    {apps.map(app => (
      <GatsbyLink key={app.id} to={app.path} sx={{ p: 2 }}>
        {app.title}
      </GatsbyLink>
    ))}
  </Grid>
)
