import React, { Component } from 'react'
import { SearchBox } from '../components/Apps/Rolodex/SearchBox'
import { CardList } from '../components/Apps/Rolodex/CardList'
import Layout from '../components/Layout'

export default class MonsterRolodex extends Component {
  constructor(props) {
    super(props)
    this.state = {
      users: [],
      input: '',
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(json => this.setState(...json))
  }

  handleChange(e) {
    this.setState({ input: e.target.value })
  }

  render() {
    const { users, input } = this.state
    const filteredUsers = users.filter(user =>
      user.name.toLowerCase().includes(input.toLowerCase())
    )

    return (
      <Layout>
        <h1>Monsters Rolodex</h1>
        <SearchBox
          type="search"
          value={input}
          handleChange={e => this.handleChange(e)}
          placeholder="search..."
        />

        <CardList users={filteredUsers} />
      </Layout>
    )
  }
}
