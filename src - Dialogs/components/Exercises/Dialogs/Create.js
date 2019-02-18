import React,{Fragment} from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Draggable from 'react-draggable';

const styles = theme => ({
    fab: {
      margin: theme.spacing.unit,
    },
  });
function PaperComponent(props) {
return (
    <Draggable>
    <Paper {...props} />
    </Draggable>
);
}

class Create extends React.Component {
    state = {
      open: false,
    };

    handleClickOpen = () => {
      this.setState({ open: true });
    };

    handleClose = () => {
      this.setState({ open: false });
    };
    handleToggle=()=>{
        this.setState({
            open:!this.state.open
        })
    }

    render() {
        const { classes } = this.props;
        return (
        <Fragment>
            <Fab  size="small" aria-label="Add" className={classes.fab}>
                <AddIcon onClick={this.handleToggle} />
            </Fab>
            <Dialog
                open={this.state.open}
                onClose={this.handleToggle}
                PaperComponent={PaperComponent}
            >
                <DialogTitle id="draggable-dialog-title">
                    Create a New Exercise
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Please fill out the form below.
                    </DialogContentText>
                    <form>

                    </form>
                </DialogContent>
                <DialogActions>
                    <Button color="primary" size="small" variant="raised">
                        Create
                    </Button>
                </DialogActions>
            </Dialog>
        </Fragment>

        );
    }}

Create.propTypes = {
    classes: PropTypes.object.isRequired,
    };

    export default withStyles(styles)(Create);