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
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';


const styles = theme => ({
    fab: {
      margin: theme.spacing.unit,
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 200,
      },
      formControl: {
        // margin: theme.spacing.unit,
        width: 500,
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
      open: true,
      exercise: {
          title:'',
          description: '',
          muscles: '',
      },
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
    handleChange = name => ({ target: { value}}) => {
        this.setState({
                exercise:{
                ...this.state.exercise,
                [name]: value
                }
            });
      };
    handleSubmit = () =>{
        const { exercise} = this.state

        this.props.onCreate(exercise)
    }


    render() {
        const { open,exercise : {title, description, muscles}}= this.state,
              {classes, muscles: categories }=this.props
        return (
        <Fragment>
            <Fab  size="small" aria-label="Add" className={classes.fab}>
                <AddIcon onClick={this.handleToggle} />
            </Fab>
            <Dialog
                open={open}
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
                        <TextField
                            id="title"
                            label="Title"
                            value={title}
                            onChange={this.handleChange('title')}
                            margin="normal"
                            className={classes.formControl}
                        />
                        <br/>
                        <FormControl  className={classes.formControl}>
                        <InputLabel htmlFor="muscles">
                            Muscles
                        </InputLabel>
                            <Select
                            id="muscles"
                            value={muscles}
                            onChange={this.handleChange('muscles')}
                            >
                            {categories.map(category=>
                                <MenuItem value={category}>
                                    {category}
                                </MenuItem>
                                )}
                            </Select>
                        </FormControl>
                        <br/>
                        <TextField
                            id="description"
                            multiline
                            rows="4"
                            label="Description"
                            value={description}
                            onChange={this.handleChange('description')}
                            margin="normal"
                            className={classes.formControl}
                        />
                        <br/>

                    </form>
                </DialogContent>
                <DialogActions>
                    <Button color="primary"
                     variant="contained"
                     onClick={this.handleSubmit}
                     >
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