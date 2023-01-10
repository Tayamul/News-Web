import React from 'react'
import Nav from './Nav'
import './header.css'

const Header = () => {
  return (
    <header>
        <h1 className='header'>News Web</h1>
        <Nav />
    </header>
  )
}

export default Header