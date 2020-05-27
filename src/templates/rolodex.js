import React, { useState } from "react"
import { SearchBox } from "../components/Apps/Rolodex/SearchBox"
import { CardList } from "../components/Apps/Rolodex/CardList"
import Layout from "../components/layout"

export default function Rolodex({ pageContext: { users } }) {
  const [input, setInput] = useState("")

  handleChange = e => {
    setInput(e.target.value)
  }

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(input.toLowerCase())
  )

  return (
    <Layout>
      <h1>Monsters Rolodex</h1>
      <SearchBox
        type="search"
        value={input}
        handleChange={this.handleChange}
        placeholder="search..."
      />

      <CardList users={filteredUsers} />
    </Layout>
  )
}
