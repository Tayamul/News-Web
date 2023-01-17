import React, { useEffect, useState } from 'react'
import * as api from '../utils/api'
import {Container, Grid, Card, CardActionArea, CardMedia, CardContent, Typography, Stack, Box, CircularProgress } from '@mui/material'


const User = () => {

    const [users, setUsers] = useState([])
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        api.getUsers().then((data) => {
            setUsers(data.users)
            setIsLoading(false);
        })
    }, [])

    if(isLoading) return (
        <Box sx={{ display: 'flex', justifyContent:'center' }}>
        <CircularProgress />
      </Box>
      )

  return (
    <Container sx={{padding: "35px 20px"}}>
        <Stack 
         direction="column"
         justifyContent="center"
         alignItems="center"
         spacing={2}
        >
        <Grid container spacing={2}>
            {users.map((user) => (
            <Grid item key={user.name} xs={6} sm={4} md={4}>
                <Card>
                <Stack
                  direction="column"
                  justifyContent="center"
                  alignItems="center"
                >
                    <CardActionArea>
                        <CardMedia image={user.avatar_url}
                        name={user.name}
                        sx={{paddingTop: "56.25%", height: "40px", width: "120px"}}/>
                            <CardContent>
                                <Typography variant='h5' gutterBottom>
                                    {user.username}
                                </Typography>
                            </CardContent>
                    </CardActionArea>
                    </Stack>
                </Card>
            </Grid>
            ))}
        </Grid>
    </Stack>
    </Container>
  )
}

export default User
