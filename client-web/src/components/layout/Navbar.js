import React from "react";
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import UserProfileMenu from '../auth/UserProfileMenu';


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function Navbar() {
  const classes = useStyles();
  const auth = useSelector(state => state.auth);

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h4" color="inherit" className={classes.title}>
            <Box textAlign="center" >
              Allied Yacht Transportation
            </Box>
          </Typography>
          <div className={classes.grow}>
            {auth.isAuthenticated ?
              <UserProfileMenu
                auth={auth.auth}
                name={auth.user.name}
              />
              :
              <Button color="inherit"
                      onClick={auth.auth.login}
              >
                Login
              </Button>
            }
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
