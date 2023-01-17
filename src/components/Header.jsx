import React, { useContext } from "react";
import { AppBar, Toolbar, Typography, Avatar } from "@mui/material";
import { Link } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import CottageIcon from '@mui/icons-material/Cottage';
import { IconButton } from '@mui/material';

const Header = () => {
  const { user } = useContext(UserContext);

  return (
    <>
      <AppBar color='primary' position="relative" >
        <Toolbar sx={{display:"flex", justifyContent:"space-between"}}>
            <Typography variant="h4" color="#f6f6f6">News Web</Typography>
            
            <IconButton size='large' color="inherit" component={Link} to='/'><CottageIcon /></IconButton>
            {/* <Typography
              variant="text"
              color="inherit"
              component={Link}
              to={"/users"}
            >
              Logged in as: {user}
            </Typography> */}
            <Avatar src={user.avatar_url} alt='user image' component={Link}
              to={"/users"}></Avatar>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
