import React from 'react'
import { Grid } from 'theme-ui'
import { Card } from '../Card'

export const CardList = ({ users }) => (
  <Grid
    sx={{
      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    }}
  >
    {users.map(user => (
      <Card user={user} key={user.id} />
    ))}
  </Grid>
)
