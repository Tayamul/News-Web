import React from 'react'
import { AppBar, Toolbar, Typography } from '@mui/material'

const Header = () => {
  return (
    <>
      <AppBar color='secondary' position='relative'>
        <Toolbar>
          <Typography variant='h4'>
            News Web
          </Typography>
        </Toolbar>
      </AppBar>
    </>
  )
}

export default Header