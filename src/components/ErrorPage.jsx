import React from 'react'
import { Box, Typography } from '@mui/material'

const ErrorPage = () => {
  return (
    <Box sx={{
      height:"70vh",
      alignContent:"center",
      display:"flex",
      justifyContent:"center",}}>
        <Box sx={{
          display:"flex",
          alignItems: "center",
          justifyContent:"center",
        }}>
          <Typography
          variant='h3'
          sx={{mr:1}}>
            404 |
          </Typography>
          <Typography variant='button'>Page not found</Typography>
        </Box>
    </Box>
  )
}

export default ErrorPage