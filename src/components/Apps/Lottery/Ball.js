import React from "react"
import { Badge } from "theme-ui"

export const Ball = ({ value }) => {
  return (
    <div>
      <Badge sx={{ ml: 2, height: 20, width: 20 }}>
        <small>{value}</small>
      </Badge>
    </div>
  )
}
