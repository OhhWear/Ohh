import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Background from '../background.png'
import { Grid, Card } from '@material-ui/core';
import CardContent from '@material-ui/core/CardContent'

const useStyles = makeStyles((theme) => ({
    icon: {
        marginRight: theme.spacing(2),
    },
    heroContent: {
        padding: theme.spacing(8, 0, 6),
    },
    heroButtons: {
        marginTop: theme.spacing(4),
    },
    container : {
        backgroundImage: `url(${Background})`,
        backgroundSize:"contain",
        backgroundPosition:"center"

    },
    cardGrid: {
        paddingBottom: theme.spacing(8),
    },
    card: {
        height: '100%',
        display: 'flex',
        justifyContent: "center"
    },
    cardMedia: {
        paddingTop: '56.25%', // 16:9
    },
    cardContent: {
        flexGrow: 1,
        fontFamily: 'Quicksand, sans-serif'
    },
}));

const cards = [
    {
        key: 0,
        question: "How do I contact 'Oh!'?",
        answer: <span>You can send us an email at <a href = "mailto: puneethsuraana@gmail.com">puneethsuraana@gmail.com</a> or you could also call us on +91-9019496469.</span>
    },
    {
        key: 1,
        question: "How can I request an exchange or return?",
        answer: <span>Please contact us via email at <a href = "mailto: puneethsuraana@gmail.com">puneethsuraana@gmail.com</a> to ask for a refund.</span>
    },
    {
        key: 2,
        question: "How can I buy an 'Oh!' product?",
        answer: <span>We sell and crowd fund our products through <a href = "https://www.indiegogo.com/">Indiegogo</a> and <a href = "https://www.catapooolt.com/">Catapooolt</a>.</span>
    },
    {
        key: 3,
        question: "What materials and fabrics do we use?",
        answer: "We use 2/60s thread 100% cotton fabric. This is because cotton is a natural fibre that offers a soft comfort. It is the fabric of choice for all seasons." 
    },
]

export default function FAQ() {
    const classes = useStyles();
    return (
        <React.Fragment>
            <CssBaseline />
            <main className={classes.container}>
                <div className={classes.heroContent}>
                    <Container maxWidth="md" >
                        <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom style={{ fontFamily: 'Quicksand, sans-serif', fontWeight: "bold"}}>
                            Frequently Asked Questions
                        </Typography>
                    </Container>
                </div>
                <Container className={classes.cardGrid} maxWidth="xl">
                <Grid container spacing={6}>
                    {cards.map((card) => (
                    <Grid item key={card.key} xs={12} sm={6} md={12}>
                        <Card>
                        <CardContent className={classes.cardContent}>
                            <Typography gutterBottom variant="h4" component="h2" style = {{color: "#fec700", fontFamily: 'Quicksand, sans-serif', fontWeight: "bold"}}>
                                <span style = {{fontSize: "50px"}}>Q.</span> {card.question}
                            </Typography>
                            <Typography style = {{fontFamily: 'Quicksand, sans-serif', fontSize: "30px"}}>
                                <span style = {{fontSize: "50px", color: "grey"}}>A.</span> {card.answer}
                            </Typography>
                        </CardContent>
                        </Card>
                    </Grid>
                    ))}
                </Grid>
                </Container>
            </main>
        </React.Fragment>
    );
}