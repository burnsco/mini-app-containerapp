import React from "react"
import styled from "@emotion/styled"
import { Card } from "../Card"
import { Grid } from "theme-ui"

export const CardList = ({ users }) => (
  <Grid
    sx={{
      gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    }}
  >
    {users.map(user => (
      <Card user={user} key={user.id} />
    ))}
  </Grid>
)
