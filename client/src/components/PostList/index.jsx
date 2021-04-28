import React from 'react'
import { Grid } from '@material-ui/core'

export default function PostList() {
  return (
    <Grid container spacing={5} alignItems="stretch">
      <Grid item xs={12} sm={6}>
        This is Post 1
      </Grid>
      <Grid item xs={12} sm={6}>
        This is Post 2
      </Grid>
      <Grid item xs={12} sm={6}>
        This is Post 3
      </Grid>
      <Grid item xs={12} sm={6}>
        This is Post 4
      </Grid>
    </Grid>
  )
}
