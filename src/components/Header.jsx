import React from 'react'
import './header.css'
import {Link} from 'react-router-dom'
import { AppBar, Toolbar, Typography } from '@mui/material'

const Header = () => {
  return (
    <>
      <AppBar position='relative'>
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