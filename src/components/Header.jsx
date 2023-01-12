import React from 'react'
import './header.css'
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <header>
        <Link to='/'><h1 className='header'>News Web</h1></Link>
    </header>
  )
}

export default Header