import * as React from 'react'
import DensityMediumIcon from '@mui/icons-material/DensityMedium';
import './nav.css'

const Nav = () => {
  return (
    <nav className='navBar'>
        <select>
            <option value="categories">Categories</option>
            <option value="coding">Coding</option>
            <option value="football">Football</option>
            <option value="cooking">Cooking</option>
        </select>
        <DensityMediumIcon />
    </nav>
    )
  }
  
  export default Nav
