import React, { useContext } from "react";
import { AppBar, Toolbar, Typography, Box } from "@mui/material";
import { Link } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import CottageIcon from '@mui/icons-material/Cottage';
import { IconButton, useTheme } from '@mui/material';

const Header = () => {
  const { user } = useContext(UserContext);
  const {theme} = useTheme()
  return (
    <>
      <AppBar color='primary' position="relative">
        <Toolbar>
            <Typography variant="h4" color="#f6f6f6">News Web</Typography>
            
            <IconButton size='large' component={Link} to='/'><CottageIcon /></IconButton>
            <Typography
              variant="text"
              color="textSecondary"
              component={Link}
              to={"/users"}
            >
              Logged in as: {user}
            </Typography>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
