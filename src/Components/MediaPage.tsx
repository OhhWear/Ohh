import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Background from '../background.png'
import { Grid, Card, Button } from '@material-ui/core';
import CardContent from '@material-ui/core/CardContent'
import { Link } from 'react-router-dom';

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


export default function FAQ() {
    const classes = useStyles();
    return (
        <React.Fragment>
            <CssBaseline />
            <main className={classes.container}>
                <div className={classes.heroContent}>
                    <Container maxWidth="lg" >
                        <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom style={{ fontFamily: 'Quicksand, sans-serif', fontWeight: "bold"}}>
                            Our Proposal                        
                        </Typography>
                        <Typography color="textPrimary" gutterBottom style={{ fontFamily: 'Quicksand, sans-serif', fontSize: "25px"}}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum odio quam, consequat eu metus interdum, dignissim pharetra purus. Quisque semper, turpis nec condimentum commodo, metus justo pharetra metus, eu vulputate orci sapien at quam. Nam nisi ligula, auctor et mi vel, imperdiet tristique diam. Duis placerat iaculis ex, a ornare lectus volutpat eget. Mauris est quam, egestas sed elementum a, aliquet lacinia mi. Nullam dignissim tincidunt tellus quis mattis. Etiam maximus libero sit amet egestas pharetra. Morbi tempor nibh sit amet elit fringilla lobortis. Ut quis orci id turpis tincidunt faucibus sit amet in elit. Quisque nibh turpis, ultrices quis maximus pharetra, vehicula at metus
                        </Typography>
                    </Container>
                </div>
                <Container className={classes.cardGrid} maxWidth="lg">
                <Grid container spacing={6}>
                    <Grid item key={"media"} xs={12} sm={6} md={12}>
                        <Card>
                        <CardContent className={classes.cardContent}>
                        <iframe src='https://www.youtube.com/embed/FTH56ifHt28'
                            frameBorder='0'
                            allow='autoplay; encrypted-media'
                            allowFullScreen
                            title='video'
                            width = "100%"
                            height = "700px"
                            style = {{margin: "0 auto"}}
                        />
                        </CardContent>
                        </Card>
                        <Button variant = "contained" color = "secondary" style = {{textTransform: "none", fontFamily: 'Quicksand, sans-serif', margin: "20px auto", fontSize: "17.5px"}}>
                            <Link style = {{textDecoration: "none", color: "inherit"}} to="/files/myfile.pdf" target="_blank" download>Download</Link>
                        </Button>
                    </Grid>
                </Grid>
                </Container>
            </main>
        </React.Fragment>
    );
}