import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Background from '../background.png'
import Grid from '@material-ui/core/Grid';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import Indiegogo from '../indiegogo.png'

const cards = [
    {
        key: 0,
        image: "https://images.unsplash.com/photo-1568441556126-f36ae0900180?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1048&q=80",
        heading: "Your Cloths Will Kill You Slowly But Surely",
        description: "We have the illusion that clothes made from synthetic fibers are safe, but the materials are in fact full of invisible chemicals the clothing industry prefers we don't think about."
    },
    {
        key: 1,
        image: "https://images.unsplash.com/photo-1494698852314-652666555934?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80",
        heading: "Sustainable Style, Backed by Science",
        description: "Our offerings are affordable bras that accomodate prosthesus. They are wire-free, plastic-free and are made with high-quality organic fabrics."
    },
    {
        key: 2,
        image: "https://d3nn873nee648n.cloudfront.net/900x600/18706/220-ER853561.jpg",
        heading: "Lets Fight It Together",
        description: "Breast cancer patients suffer from loss of identity, insecurity and depression. We believe you shouldn't be dealing with breast cancer alone."
    },
    {
        key: 3,
        image: "https://d3nn873nee648n.cloudfront.net/900x600/14770/220-SM574106.jpg",
        heading: "Be Brave",
        description: "The stigma and discrimination on topics like breast cancer is all too well known in India. We're going against the grain, starting discussions about sensitive topics and helping women deal with these issues."
    },
];


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundImage: `url(${Background})`,
        backgroundSize: "contain",
        backgroundPosition: "center",
        marginTop: "20px",
    },
    div: {
        textAlign: 'center',
        fontSize: "30px",
        fontFamily: 'Quicksand, sans-serif'
    },
    h1: {
        textAlign: 'center',
        fontFamily: 'Quicksand, sans-serif',
        fontSize: "27.5px"
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    cardMedia: {
        paddingTop: '56.25%', // 16:9
    },
    cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
    },
    cardContent: {
        flexGrow: 1
    },
    margin: {
        margin: theme.spacing(1),
    },
}));


export default function Album() {
    const classes = useStyles();
    return (
        <>
            <CssBaseline />
            <div className={classes.root}>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <div className={classes.h1}>
                            <h1>
                                <p style = {{margin: "0"}}>Oh!</p>
                                Probably the best bra for the world.
                            </h1>
                        </div>
                    </Grid>
                    <Grid item xs={12} className={classes.card}>
                        <Container>
                            <div className={classes.div}>
                                Oh! is passonately commited to saving the lives of women battling with cancer by providing them with top-quality, aesthetic and sustainable clothing that allows them to be comfortable and confident.
                            </div>
                        </Container>
                    </Grid>
                </Grid>
                <Container className={classes.cardGrid} maxWidth="lg">
                    <Grid container spacing={6}>
                        {cards.map((card) => (
                            <Grid item key={card.key} xs={12} sm={6} md={6}>
                                <Card className={classes.card}>
                                    <CardMedia
                                        className={classes.cardMedia}
                                        image={card.image}
                                        title={card.heading}
                                    />
                                    <CardContent className={classes.cardContent}>
                                        <Typography gutterBottom variant="h4" component="h2" style={{ fontFamily: "Quicksand, sans-serif", fontWeight: "bold" }}>
                                            {card.heading}
                                        </Typography>
                                        <Typography style={{ fontFamily: "Quicksand, sans-serif", fontSize: "20px" }}>
                                            {card.description}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                        <Container maxWidth="md"  style = {{marginTop: "90px"}}>
                        <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom style={{ fontFamily: 'Quicksand, sans-serif', fontWeight: "bold"}}>
                            Support Us!
                        </Typography>
                        <Typography align="center" paragraph style={{ fontSize: "25px", fontFamily: 'Quicksand, sans-serif'}}>
                            <p>
                                We are crowd funding our first batch of bras on Indiegogo and Catapoolt.
                            </p>
                        </Typography>
                        <hr />
                        <div style = {{marginTop: "20px"}}>
                            <Typography align="center" paragraph style={{ fontSize: "25px", fontFamily: 'Quicksand, sans-serif' }}>
                                Support us in our goal of making you feel beautiful, comfortable and powerful.
                            </Typography>
                            <Grid spacing = {4} container alignContent="center" style={{ textAlign: "center", margin: "50px 0" }}>
                                <Grid sm={6}>
                                    <Button onClick = {() => window.location.href = "https://www.indiegogo.com/"} variant="contained" size="large" color="primary" className={classes.margin}>
                                        Support on Indiegogo
                                    </Button>
                                </Grid>
                                <Grid sm={6}>
                                    <Button onClick = {() => window.location.href = "https://www.catapooolt.com/"} variant="contained" size="large" color="primary" className={classes.margin}>
                                        Support on Catapoolt
                                    </Button>
                                </Grid>
                                <Grid sm={12} style = {{marginTop: "20px"}}>
                                    <img alt = "indigogo logo" src = {Indiegogo} style = {{width: "200px", height: "200px"}}></img>
                                </Grid>
                            </Grid>
                        </div>
                        </Container>
                </Container>
            </div>
        </>
    );
}