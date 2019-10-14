import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
//import clsx from 'clsx';
//import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  dense: {
    marginTop: theme.spacing(2),
  },
  menu: {
    width: "200",
  },
  root: {
    padding: theme.spacing(3, 2),
  },
  button: {
    margin: theme.spacing(1),
  },
  input: {
    display: 'none',
  },
}));


function ContactUs(){
  const classes = useStyles();
  const [values, setValues] = React.useState({
    name: '',
    email: '',
    reason: '',
    multiline: '',
  });

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };
  return(
    <div>
      <Paper className={classes.root}>
        <Typography variant="h3" component="h3">
          Contact Us
        </Typography>
        <form className={classes.container} noValidate autoComplete="off">
          <TextField
            id="filled-name"
            label="Name"
            fullWidth
            className={classes.textField}
            value={values.name}
            onChange={handleChange('name')}
            margin="normal"
            variant="filled"
          />
          <TextField
            id="filled-email"
            label="Email"
            fullWidth
            className={classes.textField}
            value={values.email}
            onChange={handleChange('email')}
            margin="normal"
            variant="filled"
          />
          <TextField
            id="filled-reason"
            label="Reason"
            fullWidth
            className={classes.textField}
            value={values.reason}
            onChange={handleChange('reason')}
            margin="normal"
            variant="filled"
          />
          <TextField
            id="filled-multiline-static"
            label="Message"
            multiline
            rows="4"
            fullWidth
            className={classes.multiline}
            margin="normal"
            variant="filled"
          />
          <Button variant="contained" color="primary" className={classes.button}>Submit</Button>
        </form>
      </Paper>
    </div>
  );
}
export default ContactUs
