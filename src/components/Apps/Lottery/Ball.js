import React from "react"

export const Ball = ({ value }) => {
  return (
    <div>
      <span
        sx={{
          height: 35,
          width: 35,
          margin: 5,
          backgroundColor: "rgb(84, 216, 113)",
          borderRadius: "50%",
          display: "inline-block",
        }}
      >
        <small>{value}</small>
      </span>
    </div>
  )
}
