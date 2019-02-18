import React from 'react'
import {Paper} from '@material-ui/core'

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';


const styles = theme => ({
    root: {
      flexGrow: 1,
    },
    paper: {
        marginTop: 10,
        marginBottom: 10,
      padding: theme.spacing.unit * 2,
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  });


  function LeftPane(props) {
    const { classes } = props;
    return (
        <Paper className={classes.paper} >
        I am Left
        </Paper>
    );
  }

  LeftPane.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  export default withStyles(styles)(LeftPane);