import React from 'react'
import Header from '../components/Header'
import { Container } from '@material-ui/core'
import PostList from '../components/PostList'

export default function HomePage() {
  return (
    <Container className={{}} maxWidth="lg">
      <Header />
      <PostList />
    </Container>
  )
}
