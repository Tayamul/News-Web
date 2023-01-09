import * as React from 'react'
import DensityMediumIcon from '@mui/icons-material/DensityMedium';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
// import InputLabel from '@mui/material/InputLabel';

import '../App.css'

const Nav = () => {
  return (
    <AppBar position="fixed">
      <Toolbar>
        <Select 
          value={"category"}
          label="Category"
          sx={{
            width: 150,
            border: "1px solid black",
            mr: 22
          }}>
          <MenuItem value={"cooking"}>Cooking</MenuItem>
          <MenuItem value={"football"}>Football</MenuItem>
          <MenuItem value={"coding"}>Coding</MenuItem>
        </Select>
        <DensityMediumIcon />
      </Toolbar>
    </AppBar>
    )
  }
  
  export default Nav

  // <nav display = "flex"
  //   justifyContent = "space-between"
  // >
  //     <select>
  //         <option value="categories">Categories</option>
  //         <option value="coding">Coding</option>
  //         <option value="football">Football</option>
  //         <option value="cooking">Cooking</option>
  //     </select>
  //     <DensityMediumIcon />
  // </nav>