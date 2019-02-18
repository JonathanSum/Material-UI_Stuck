import React from 'react';
import {AppBar,Toolbar,Typography} from '@material-ui/core';
// import Typography from '@material-ui/core/Typography';
// import Button from '@material-ui/core/Button';
// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';
const styles = {
    root: {
      flexGrow: 1,
    },
    grow: {
      flexGrow: 1,
    },
    menuButton: {
      marginLeft: -12,
      marginRight: 20,
    },
  };
  
export default props =>

    <AppBar position="static">
        <Toolbar>
        <Typography  variant="headline" color="inherit">
          Exercise Database
      </Typography>
        </Toolbar>
    </AppBar>