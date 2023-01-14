import React, { useContext } from "react";
import { AppBar, Toolbar, Typography, Box } from "@mui/material";
import { Link } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import CottageIcon from '@mui/icons-material/Cottage';
import { IconButton } from '@mui/material';

const Header = () => {
  const { user } = useContext(UserContext);
  return (
    <>
      <AppBar color="secondary" position="relative">
        <Toolbar>
        <Box sx={{display:"flex", alignItems:'center'}}>
            <Typography variant="h4">News Web</Typography>
            
            <IconButton size='large' component={Link} to='/'><CottageIcon /></IconButton>
            <Typography
              variant="text"
              color="textSecondary"
              component={Link}
              to={"/users"}
            >
              Logged in as: {user}
            </Typography>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
