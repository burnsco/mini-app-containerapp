import { useEffect, useState } from 'react'
/** @jsx jsx */
import { jsx, Input, Grid } from 'theme-ui'
import { Card } from '../components/Apps/Rolodex/Card'
import Container from '../components/Container'
import Layout from '../components/Layout'

const MonsterRolodex = () => {
  const [users, setUsers] = useState([])
  const [input, setInput] = useState('')

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(json => setUsers([...json]))
  }, [])

  const handleChange = e => {
    setInput(e.target.value)
  }

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(input.toLowerCase())
  )

  return (
    <Layout>
      <Container>
        <Input
          type="search"
          value={input}
          onChange={e => handleChange(e)}
          placeholder="search..."
        />
        <Grid
          sx={{
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          }}
        >
          {filteredUsers.map(user => (
            <Card user={user} key={user.id} />
          ))}
        </Grid>
      </Container>
    </Layout>
  )
}

export default MonsterRolodex
