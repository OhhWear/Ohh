import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import InstagramIcon from '@material-ui/icons/Instagram';
import PinterestIcon from '@material-ui/icons/Pinterest';
import Logo from '../ohlogov1.png'

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center" style={{ color: "white", fontFamily: "Quicksand, sans-serif"}}>
      {'Copyright © '}
      <a color="inherit" href="http://localhost:3000/" style={{ textDecoration: "none", color: "white" }}>
        Wear Oh!
        </a>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}


const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: "black",
    color: "white",
    padding: theme.spacing(8),
    fontFamily: 'Quicksand, sans-serif'
  }
}
))

export default function Footer() {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <Typography variant="h4" align="center" gutterBottom style = {{fontFamily: "Quicksand, sans-serif"}}>
        Oh!
        <img style = {{width: "30px", height: "25px", margin: "0 10px"}} alt = "logo" src = {Logo}></img>
      </Typography>
      <Typography variant="subtitle1" align="center" color="textSecondary" component="p" style = {{fontFamily: "Quicksand, sans-serif", color: "white", fontSize: "20px"}}>
        Making you feel beautiful, comfortable and powerful.
      </Typography>
      <Typography variant="h5" align="center" gutterBottom style = {{fontFamily: "Quicksand, sans-serif"}}>
        Contact Us.
      </Typography>
      <Typography variant="subtitle1" align="center" color="textSecondary" component="p" style = {{fontFamily: "Quicksand, sans-serif", color: "white", fontSize: "17.5px"}}>
        Email : <a href = "mailto: puneethsuraana@gmail.com" style = {{color: "white"}}>puneethsuraana@gmail.com</a>
      </Typography>
      <Typography variant="subtitle1" align="center" color="textSecondary" component="p" style = {{fontFamily: "Quicksand, sans-serif", color: "white", fontSize: "17.5px"}}>
        Phone : +91 9019496469
      </Typography>
      <div style = {{textAlign: "center", marginBottom: "10px"}}>
        <p style = {{fontSize: "22.5px"}}> 
          Social Media: 
        </p>
        <a href = "http://instagram.com/" style = {{color: "inherit", margin: "5px"}}><InstagramIcon /></a>
        <a href = "http://pinterest.com/" style = {{color: "inherit", margin: "5px"}}><PinterestIcon /></a>
      </div>
      <Copyright />
    </footer>
  )
}