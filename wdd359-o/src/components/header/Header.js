
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
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import NewReleasesIcon from '@material-ui/icons/NewReleases';
import RateReviewIcon from '@material-ui/icons/RateReview';
import InfoIcon from '@material-ui/icons/Info';
import ContactsIcon from '@material-ui/icons/Contacts';

  const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,

    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    list: {
    width: 250,
  },


  }));



export default function Header () {
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (side, open) => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [side]: open });
  };

  const sideList = side => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <List>
          <ListItem component={Link} to="./../NewReleases" button key="New Releases">
            <ListItemIcon><NewReleasesIcon /></ListItemIcon>
            <ListItemText primary="New Releases" />
          </ListItem>
          <ListItem component={Link} to="./../Reviews" button key="Reviews">
            <ListItemIcon><RateReviewIcon /></ListItemIcon>
            <ListItemText primary="Reviews" />
          </ListItem>
          <ListItem component={Link} to="./../About" button key="About">
            <ListItemIcon><InfoIcon /></ListItemIcon>
            <ListItemText primary="About" />
          </ListItem>
          <ListItem component={Link} to="./../ContactUs" button key="Contact Us">
            <ListItemIcon><ContactsIcon /></ListItemIcon>
            <ListItemText primary="Contact Us" />
          </ListItem>

      </List>
      <Divider />
      <List>
        {['Log Out', ].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <ExitToAppIcon /> : <ExitToAppIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );





  return (
    <div className={classes.root}>
      <AppBar position="static" style={{ backgroundColor: '#CCB145' }}>
        <Toolbar>
          <IconButton onClick={toggleDrawer('left', true)} edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Drawer open={state.left} onClose={toggleDrawer('left', false)}>
            {sideList('left')}
          </Drawer>

          <Typography variant="h6" className={classes.title}>
            <img src={logo} alt="Logo" className="logo"/>
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
