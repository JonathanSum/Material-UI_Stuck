import React ,{Fragment}from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {List,Paper, Grid, Typography,ListItem,ListItemText} from '@material-ui/core/';


const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
      marginTop: 10,
      marginBottom: 10,
    padding: theme.spacing.unit * 2,
    color: theme.palette.text.secondary,
    textTransform: 'capitalize',
    height: 500,
    overflowY:'auto'
  },
  LPane:{
    marginTop:24,
    height: 500,
    overflowY:'auto',
    textTransform: 'initial'
  }
});

function CenteredGrid(props) {
  const { classes,
    exercises,
    category,
    onSelect,
    exercise:{
      id,
      title ="Welcome!",
      description="Please select an exercise for the list on the left."
    }
  } = props;

  return (
    <Fragment>
      <Grid container spacing={24} className={classes.root}>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
          {exercises.map(([group, exercises],indexf)=>
            !category || category ===group
            ?
            <Fragment key={group}>
              <Typography variant="headline">
                {group}
              </Typography>
              <List component="ul">
                {exercises.map(({title,id},index)=>
                  <ListItem button  key={index}>
                    <ListItemText primary={title}  key={index}
                    onClick={()=>onSelect(id)}
                      />
                  </ListItem>

                  )}
            </List>
            </Fragment>
            : null
            )}

          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            <Typography
            variant="display1">
              {title}
            </Typography>:
            <Typography
            variant="subheading" className={classes.LPane}>
              {description}
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Fragment>
  );
}

CenteredGrid.propTypes = {
  classes: PropTypes.object.isRequired,
  exercises: PropTypes.array.isRequired
};

export default withStyles(styles)(CenteredGrid);