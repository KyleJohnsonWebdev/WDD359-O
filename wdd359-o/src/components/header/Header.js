
import logo from '../../images/camper.png';
import { Link } from "react-router-dom";
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import './Header.css';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
  const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
      display: 'flex',
      marginBottom: '1rem',
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    paper: {
    marginRight: theme.spacing(2),
  },
  }));



export default function Header () {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef(null);

    const handleToggle = () => {
      setOpen(prevOpen => !prevOpen);
    };

    const handleClose = event => {
      if (anchorRef.current && anchorRef.current.contains(event.target)) {
        return;
      }

      setOpen(false);
    };

    function handleListKeyDown(event) {
      if (event.key === 'Tab') {
        event.preventDefault();
        setOpen(false);
      }
    }


    // return focus to the button when we transitioned from !open -> open
    const prevOpen = React.useRef(open);
    React.useEffect(() => {
      if (prevOpen.current === true && open === false) {
        anchorRef.current.focus();
      }

      prevOpen.current = open;
    }, [open]);
  return (
    <div className={classes.root}>
      <AppBar position="static" style={{ backgroundColor: '#CCB145' }}>
        <Toolbar>
        <div>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" ref={anchorRef}
          aria-controls="menu-list-grow"
          aria-haspopup="true"
          onClick={handleToggle}>
            <MenuIcon />
          </IconButton>
            <Popper open={open} anchorEl={anchorRef.current} keepMounted transition disablePortal>
            {({ TransitionProps, placement }) => (
              <Grow {...TransitionProps} style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}>
                <Paper id="menu-list-grow">
                  <ClickAwayListener onClickAway={handleClose}>
                    <MenuList autoFocusItem={open} onKeyDown={handleListKeyDown}>
                      <MenuItem component={Link} to="/NewReleases" onClick={handleClose}>New Releases</MenuItem>
                      <MenuItem component={Link} to="/Reviews" onClick={handleClose}>Reviews</MenuItem>
                      <MenuItem component={Link} to="/About" onClick={handleClose}>About</MenuItem>
                      <MenuItem component={Link} to="/ContactUs" onClick={handleClose}>Contact Us</MenuItem>
                      <MenuItem onClick={handleClose}>Log Out</MenuItem>
                    </MenuList>
                  </ClickAwayListener>
                </Paper>
              </Grow>
            )}
            </Popper>
        </div>
          <Typography variant="h6" className={classes.title}>
            <img src={logo} alt="Logo" className="logo"/>
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
