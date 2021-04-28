import React from 'react'
import { Typography } from '@material-ui/core'
import useStyles from './style'
export default function Header() {
  const classes = useStyles()
  return (
    <Typography
      variant="h3"
      style={{ textAlign: 'center' }}
      className={classes.container}
    >
      Blog
    </Typography>
  )
}
