/** @jsx jsx */
import { jsx, Grid } from 'theme-ui'
import GatsbyLink from './GatsbyLink'
import Container from './Container'

const apps = [
  { id: 'app-index', title: 'Home', path: '/' },
  { id: 'dice-game', title: 'Dice Roll', path: '/dice/' },
  { id: 'lottery-generator', title: 'Lottery Numbers', path: '/lottery/' },
  { id: 'luggage-tracker', title: 'Luggage Tracker', path: '/luggage/' },
  { id: 'pizza-calculator', title: 'Pizza Calculator', path: '/pizza/' },
  { id: 'monsters-rolodex', title: 'Monsters Rolodex', path: '/rolodex/' },
  { id: 'coin-flip', title: 'Flip Coin', path: '/coin/' },
]

export default function NavLinkList() {
  return (
    <Container variant="layout.aside">
      <Grid
        sx={{
          gridTemplateColumns: `repeat(auto-fit, minmax(128px, 1fr))`,
        }}
      >
        {apps.map(app => (
          <GatsbyLink
            key={app.id}
            to={app.path}
            sx={{
              placeSelf: 'center',
            }}
          >
            {app.title}
          </GatsbyLink>
        ))}
      </Grid>
    </Container>
  )
}
