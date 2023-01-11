import React from 'react'
import Nav from './Nav'
import './header.css'
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <header>
        <Link to='/'><h1 className='header'>News Web</h1></Link>
        <Nav />
    </header>
  )
}

export default Header