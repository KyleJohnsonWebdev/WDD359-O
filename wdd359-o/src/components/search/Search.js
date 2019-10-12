import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import SearchIcon from '@material-ui/icons/Search';
import Icon from '@material-ui/core/Icon';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles(theme => ({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: '99%',
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },

}));

export default function SearchMovie() {
  const classes = useStyles();
  const movies= [
    {id: 0, title:"avengers infi war", overview: "avengers overview"},
    {id: 1, title:"the avengers", overview: "this is my second overview"}
  ];

  const [rows, setRows] = useState(movies);
  

  return (
    <Paper className={classes.root}>
    <InputBase
      className={classes.input}
      placeholder="Search Movie Information"
      inputProps={{ 'aria-label': 'search movie information' }}
    />
    <IconButton className={classes.iconButton} aria-label="search">
      <SearchIcon />
    </IconButton>
    <Divider className={classes.divider} orientation="vertical" />
    </Paper>
  );
}
