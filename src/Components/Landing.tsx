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
// import Button from '@material-ui/core/Button';
// import Indiegogo from '../indiegogo.png'
// import { Link } from 'react-router-dom'

const cards = [
    {
        key: 0,
        image: "https://d3nn873nee648n.cloudfront.net/900x600/18706/220-ER853561.jpg",
        heading: "Lets Fight It Together",
        description: "Breast cancer patients suffer from loss of identity, insecurity and depression. We believe you shouldn't be dealing with breast cancer alone.",
        links: ""
    },
    {
        key: 1,
        image: "https://d3nn873nee648n.cloudfront.net/900x600/14770/220-SM574106.jpg",
        heading: "Be Brave",
        description: "The stigma and discrimination on topics like breast cancer is all too well known in India. We're going against the grain, starting discussions about sensitive topics and helping women deal with these issues.",
        links: ""
    },
    {
        key: 2,
        image: "https://thumbs.dreamstime.com/b/women-holding-bra-against-pink-background-concept-breast-cancer-awareness-international-no-day-celebration-159354020.jpg",
        heading: "Sustainable Style, Backed by Science",
        description: "Our offerings are affordable bras that accomodate prosthesis. They are wire-free, plastic-free and are made with high-quality organic fabrics.",
        links: ""
    },
    {
        key: 3,
        image: "https://remake.world/wp-content/uploads/2018/01/DSC_1540-scaled.jpg",
        heading: "Your Clothes Will Kill You Slowly But Surely!",
        description: "We have the illusion that clothes made from synthetic fibers are safe, but the materials are in fact full of invisible chemicals the clothing industry prefers we don't think about.",
        // links: <Button style = {{textTransform: "none", fontFamily: 'Quicksand, sans-serif', fontSize: "17.5px"}} variant = "contained" color = "secondary"><Link to = "/media" style = {{textDecoration: "none", color: "white"}}>See our proposal</Link></Button>
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
        margin: "0 10px",
        // fontSize: "27.5px"
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
                <Grid container spacing={0}>
                    <Grid item xs={12}>
                        <div className={classes.h1}>
                            <h1 style = {{fontSize: "80px", margin: "20px"}}>
                                Ohh!
                            </h1>
                            <p style = {{fontSize: "45px", fontWeight: "bold"}}>
                                Probably the best bra for the world.
                            </p>
                        </div>
                    </Grid>
                    <Grid item xs={12} className={classes.card}>
                        <Container>
                            <div className={classes.div}>
                                Ohh! is passionately commited to saving the lives of women battling with breast cancer by providing them with top-quality, aesthetic and sustainable clothing that allows them to be comfortable and confident.
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
                                        <Typography style={{ fontFamily: "Quicksand, sans-serif", fontSize: "20px", marginBottom: "5px" }}>
                                            {card.description}
                                        </Typography>
                                        {card.links}
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                    <Container maxWidth="md" style={{ marginTop: "90px" }}>
                        <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom style={{ fontFamily: 'Quicksand, sans-serif', fontWeight: "bold" }}>
                            Support Us!
                        </Typography>
                        <Typography align="center" paragraph style={{ fontSize: "25px", fontFamily: 'Quicksand, sans-serif' }}>
                            We are crowd funding our first batch of bras soon on Indiegogo and Catapooolt.
                        </Typography>
                        <hr />
                        <div style={{ marginTop: "20px" }}>
                            <Typography align="center" paragraph style={{ fontSize: "25px", fontFamily: 'Quicksand, sans-serif' }}>
                                Support us in our goal of making you feel beautiful, comfortable and powerful.
                            </Typography>
                            {/* <Grid spacing = {4} container alignContent="center" style={{ textAlign: "center", margin: "50px 0" }}>
                                <Grid item sm={6}>
                                    <Button style = {{textTransform: "none", fontFamily: 'Quicksand, sans-serif', fontSize: "17.5px"}} variant="contained" size="large" color = "secondary"  className={classes.margin}>
                                        <a href = "https://www.indiegogo.com/" style = {{textDecoration: "none", color: "white"}}>
                                            Support on Indiegogo
                                        </a>
                                    </Button>
                                </Grid>
                                <Grid item sm={6}>
                                    <Button style = {{textTransform: "none", fontFamily: 'Quicksand, sans-serif', fontSize: "17.5px"}} variant="contained" size="large" color = "secondary"  className={classes.margin}>
                                        <a href = "https://www.catapooolt.com/" style = {{textDecoration: "none", color: "white"}}>
                                            Support on Catapoolt
                                        </a>
                                    </Button>
                                </Grid>
                                <Grid item sm={12} style = {{marginTop: "20px"}}>
                                    <img alt = "indigogo logo" src = {Indiegogo} style = {{width: "200px", height: "200px"}}></img>
                                </Grid>
                            </Grid> */}
                        </div>
                    </Container>
                </Container>
            </div>
        </>
    );
}