import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { Link } from 'react-router-dom'
import MenuIcon from '@material-ui/icons/MenuRounded';
import HomeIcon from '@material-ui/icons/HomeRounded';
import PeopleAltRoundedIcon from '@material-ui/icons/PeopleAltRounded';
// import ContactSupportRoundedIcon from '@material-ui/icons/ContactSupportRounded';
import QuestionAnswerRoundedIcon from '@material-ui/icons/QuestionAnswerRounded';
import { green } from '@material-ui/core/colors';
import Logo from '../ohlogov1.png'

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
  appbar: {
    backgroundColor: "#fec700",
    fontFamily: 'Quicksand, sans-serif'
  },
  list: {
    width: 375,
  },
  fullList: {
    width: 'auto',
  },
  logo: {
    flexGrow: 1,
  },
  image: {
    height: "45px",
    width: "50px",
    marginTop: "5px",
  }
});

const LinkStyles = {
  fontSize: "20px",
  textDecoration: 'none',
  color: "black",
  padding: "15px 0"
}

const links = [
  {
    link: '/',
    icon: <HomeIcon color="secondary" />
  },
  {
    link: '/survey',
    icon: <QuestionAnswerRoundedIcon color="primary" />
  },
  {
    link: '/aboutus',
    icon: <PeopleAltRoundedIcon style={{ color: green[500] }} />
  },
  // {
  //   link: '/faq',
  //   icon: <ContactSupportRoundedIcon/>
  // },
]

type Anchor = 'top' | 'left' | 'bottom' | 'right';

export default function Header() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor: Anchor, open: boolean) => (
    event: React.KeyboardEvent | React.MouseEvent,
  ) => {
    if (
      event &&
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' ||
        (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor: Anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {['Home', 'Survey', 'About Us'].map((text, index) => (
          <ListItem button key={text}>
            <Link style={LinkStyles} to={(links[index].link)}>
              <ListItemIcon>{links[index].icon}</ListItemIcon>
              {text}
            </Link>
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <div className={classes.root}>
    <AppBar position="static" className={classes.appbar}>
      <Toolbar >
      <Link to="/" className={classes.logo}>
          <img src={Logo} className={classes.image} alt="logo" />
        </Link>
        <div>
          {(['right'] as Anchor[]).map((anchor) => (
            <React.Fragment key={anchor}>
              <div>
                <Button onClick={toggleDrawer(anchor, true)}>
                  <MenuIcon />
                </Button>
              </div>
              <SwipeableDrawer
                anchor={anchor}
                open={state[anchor]}
                onClose={toggleDrawer(anchor, false)}
                onOpen={toggleDrawer(anchor, true)}
              >
                {list(anchor)}
              </SwipeableDrawer>
            </React.Fragment>
          ))}
        </div>
      </Toolbar>
    </AppBar>
    </div>
  );
}