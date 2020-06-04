import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Grid, { GridSpacing } from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import Puneeth from './Assets/puneeth2.jpg'
import Prithvi from './Assets/prithvi.jpg'
import Hemani from './Assets/hemani.jpg'
import Background from '../background.png'
import Kickstarter from '../kickstarter.png'
// import Kickstarter from '../Just Launched_English_Instagram.png'
import Catapoolt from '../catapoolt.png'
import { Card, Paper } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        large: {
            justifyContent: "center",
            width: theme.spacing(15),
            height: theme.spacing(15),
        },
        icon: {
            marginRight: theme.spacing(2),
        },
        heroContent: {
            padding: theme.spacing(8, 3, 6),
        },
        text: {
            justifyContent: "flex-end"
        },
        paper: {
            height: 360,
            width: 250,
            padding: "30px",
            justifyContent: "center",
        },
        container : {
            backgroundImage: `url(${Background})`,
            backgroundSize:"contain",
            backgroundPosition:"center"
            },    
        margin: {
            margin: theme.spacing(1),
        },
    }),
);

const founders = [
    {
        name: "Puneeth Suraana",
        description: "CEO",
        image: Puneeth,
        links: [        
        <a style = {{margin: "5px"}} href = "https://in.linkedin.com/in/puneethsuraana"><LinkedInIcon /></a>,
        <a style = {{margin: "5px"}} href = "https://www.instagram.com/puneethsuraana/?hl=en"><InstagramIcon /></a>
    ]
    },
    {
        name: "Hemani ~",
        description: "COO",
        image: Hemani,
        links: [        
        <a style = {{margin: "5px"}} href = "https://in.linkedin.com/in/puneethsuraana"><LinkedInIcon /></a>,
        <a style = {{margin: "5px"}} href = "https://www.instagram.com/puneethsuraana/?hl=en"><InstagramIcon /></a>
    ]
    },
    {
        name: "Dhanush",
        description: "Reasearch Head",
        image: Puneeth,
        links: [        
        <a style = {{margin: "5px"}} href = "https://in.linkedin.com/in/puneethsuraana"><LinkedInIcon /></a>,
        <a style = {{margin: "5px"}} href = "https://www.instagram.com/puneethsuraana/?hl=en"><InstagramIcon /></a>
    ]
    },
    {
        name: "Prithvi Anil",
        description: "Web developer",
        image: Prithvi,
        links: [
        <a style = {{margin: "5px"}} href = "https://in.linkedin.com/in/puneethsuraana"><LinkedInIcon /></a>,
        <a style = {{margin: "5px"}} href = "https://www.instagram.com/puneethsuraana/?hl=en"><InstagramIcon /></a>
    ]
    },
    {
        name: "Hemani ~",
        description: "COO",
        image: Hemani,
        links: [        
        <a style = {{margin: "5px"}} href = "https://in.linkedin.com/in/puneethsuraana"><LinkedInIcon /></a>,
        <a style = {{margin: "5px"}} href = "https://www.instagram.com/puneethsuraana/?hl=en"><InstagramIcon /></a>
    ]
    },
    {
        name: "Prithvi Anil",
        description: "Web developer",
        image: Prithvi,
        links: [
        <a style = {{margin: "5px"}} href = "https://in.linkedin.com/in/puneethsuraana"><LinkedInIcon /></a>,
        <a style = {{margin: "5px"}} href = "https://www.instagram.com/puneethsuraana/?hl=en"><InstagramIcon /></a>
    ]
    },
]


const Buy: React.FC<any> = () => {
    const classes = useStyles();
    const [spacing, setSpacing] = React.useState<GridSpacing>(5);

    return (
        <React.Fragment>
            <CssBaseline />
            <main className={classes.container}>
                <div className={classes.heroContent}>
                    <Container maxWidth="md">
                        <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom style={{ fontFamily: 'Quicksand, sans-serif', fontWeight: "bold"}}>
                            Support Us
                        </Typography>
                        <Typography align="center" paragraph style={{ fontSize: "25px", fontFamily: 'Quicksand, sans-serif'}}>
                            <p>
                                We are crowd sourcing using out bras and lingerie kickstarter and catapoolt.
                            </p>
                        </Typography>
                        <hr />
                        <div style = {{marginTop: "20px"}}>
                            {/* <Typography component="h1" variant="h3" align="center" color="textPrimary" gutterBottom style={{ fontFamily: 'Quicksand, sans-serif', fontWeight: "bold"}}> */}
                            {/* <Typography paragraph align="center" color="textPrimary" gutterBottom style={{ fontFamily: 'Quicksand, sans-serif'}}> */}
                            <Typography align="center" paragraph style={{ fontSize: "25px", fontFamily: 'Quicksand, sans-serif'}}>
                                Help us accomplish our goal of providing high quality and affordable wearables to lakhs of breast cancer survivors.
                            </Typography>
                            <Grid container alignContent = "center" style = {{textAlign: "center", margin: "50px 0"}}>
                                <Grid sm = {6}>
                                    <Button variant="contained" size="large" color="primary" className={classes.margin}>
                                        Support on Kickstarter
                                    </Button>
                                </Grid>
                                <Grid sm = {6}>
                                    <Button variant="contained" size="large" color="primary" className={classes.margin}>
                                        Support on Catapoolt
                                    </Button>
                                </Grid>
                            </Grid>
                            {/* <Grid container className={classes.root} spacing={2}>
                                <Grid item xs={12}>
                                    <Grid container justify="center" spacing={spacing}>
                                        {founders.map((value) => (
                                            <Grid key={value.name} item>
                                                <Paper className={classes.paper}>
                                                <div style = {{alignSelf: "center"}}>
                                                    <img src={value.image} alt="ceo" style= {{width: "100%", height: "100%", borderRadius: "50%"}}/>
                                                </div>
                                                    <Typography align="center" color="textPrimary" gutterBottom>
                                                        <div style = {{fontWeight: "bold", fontFamily: 'Quicksand, sans-serif', margin: "10px 0"}}>
                                                            {value.name}
                                                        </div>
                                                        <hr/>
                                                        <div style = {{fontFamily: 'Quicksand, sans-serif', margin: "10px 0"}}>
                                                            {value.description}
                                                        </div>
                                                        <div>
                                                            {value.links}
                                                        </div>
                                                    </Typography>
                                                </Paper>
                                            </Grid>
                                        ))}
                                    </Grid>
                                </Grid>
                            </Grid> */}

                        </div>
                    </Container>
                </div>
            </main>
        </React.Fragment>
    )
}

export default Buy;
