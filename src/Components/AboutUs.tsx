import React, { MouseEvent } from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Grid, { GridSpacing } from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import Background from '../background.png'
import ReactCardFlip from 'react-card-flip';
import Awards from './Awards';

import Radha from './Assets/Radha.jpg';
import Puneeth from './Assets/puneeth3.jpg'
import Dhanush from './Assets/dhanush.jpg';
import Shakambari from './Assets/shakambari.jpg';
import Prithvi from './Assets/prithvi.jpg';

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
            height: 400,
            width: 250,
            padding: "30px",
            margin: "3px",
            justifyContent: "center",
        },
        container: {
            backgroundImage: `url(${Background})`,
            backgroundSize: "contain",
            backgroundPosition: "center"
        },
    }),
);

const founders = [
    {
        key: 0,
        name: "Puneeth Suraana",
        title: "CEO",
        image: Puneeth,
        links: [
            <a style={{ margin: "5px" }} href="https://in.linkedin.com/in/puneethsuraana"><LinkedInIcon /></a>,
            <a style={{ margin: "5px" }} href="https://www.instagram.com/puneethsuraana/?hl=en"><InstagramIcon /></a>
        ],
        description: "Puneeth is a podcaster, blogger with over 300 blogs. Recognized as One of India's Youngest entrepreneurs for co-founding his first clothing venture at the age of 16 with just 20 rupees. Currently pursuing an MBA in Human capital management from PES University."
    },
    {
        key: 1,
        name: "Shakambari Ganeshan",
        title: "Research",
        image: Shakambari,
        links: [
            <a style={{ margin: "5px" }} href="https://in.linkedin.com/in/puneethsuraana"><LinkedInIcon /></a>,
        ],
        description: "Shakambari heads the research division of 'Ohh!', ensuing our clothings are safe and sustainable. She has a PhD. Microbiology, School of Biotechnology, Madurai Kamaraj University, Madurai."
    },
    {
        key: 2,
        name: "Radha Vishwanaatha",
        title: "Design",
        image: Radha,
        links: [
        ],
        description: "Radha is the main designer of 'Ohh!'s bras. She is a self made entrepreneur who is experienced in design, yoga and buisness."
    },
    {
        key: 3,
        name: "Dhanush Vallabhnani",
        title: "Research",
        image: Dhanush,
        links: [
        ],
        description: "Dhanush is part of the research division of 'Oh!'. He is currently pursuing a B-Tech in CSE at PES University."
    },
    {
        key: 4,
        name: "Prithvi Anil",
        title: "Web developer",
        image: Prithvi,
        links: [
        ],
        description: "Prithvi helped make the website for 'Oh!'. He is currently pursuing a B-Tech in CSE at PES University."
    },
]


const AboutUs: React.FC<any> = () => {
    const classes = useStyles();
    const [spacing, setSpacing] = React.useState<GridSpacing>(5);
    const [isFlipped0, setIsFlipped0] = React.useState(false);
    const [isFlipped1, setIsFlipped1] = React.useState(false);
    const [isFlipped2, setIsFlipped2] = React.useState(false);
    const [isFlipped3, setIsFlipped3] = React.useState(false);
    const [isFlipped4, setIsFlipped4] = React.useState(false);

    const isFlipped = [isFlipped0, isFlipped1, isFlipped2, isFlipped3, isFlipped4];


    const handleClick = (e: MouseEvent, name: String) => {
        // e.preventDefault();
        if (name === "Puneeth Suraana") {
            setIsFlipped0(!isFlipped0);
        }
        if (name === "Shakambari Ganeshan") {
            setIsFlipped1(!isFlipped1);
        }
        if (name === "Radha Vishwanaatha") {
            setIsFlipped2(!isFlipped2);
        }
        if (name === "Dhanush Vallabhnani") {
            setIsFlipped3(!isFlipped3);
        }
        if (name === "Prithvi Anil") {
            setIsFlipped4(!isFlipped4);
        }
    }

    return (
        <React.Fragment>
            <CssBaseline />
            <main className={classes.container}>
                <div className={classes.heroContent}>
                    <Container maxWidth="md">
                        <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom style={{ fontFamily: 'Quicksand, sans-serif', fontWeight: "bold" }}>
                            Our Mission
                        </Typography>
                        <Typography align="center" paragraph style={{ fontSize: "25px", fontFamily: 'Quicksand, sans-serif' }}>
                            'Ohh!' is passionately committed to saving the lives of women battling with cancer by providing them with top quality, aesthetic and sustainable clothing that allows them to be comfortable and confident. Our five-year goal is to make a difference in the lives of 1 million women and make a significant and lasting impact on the sustainable clothing industry.
                        </Typography>
                        <hr />
                        <div style={{ marginTop: "20px" }}>
                            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom style={{ fontFamily: 'Quicksand, sans-serif', fontWeight: "bold", marginBottom: "60px" }}>
                                Meet the Team
                            </Typography>
                            <Grid container className={classes.root} spacing={2}>
                                <Grid container justify="center" spacing={spacing}>
                                    {founders.map((value) => (
                                        <div key={value.key}>

                                            <ReactCardFlip isFlipped={isFlipped[value.key]} flipDirection="horizontal">
                                                <Grid key={value.name} item xs={4} onClick={(e) => handleClick(e, value.name)}>
                                                    <Paper className={classes.paper}>
                                                        <div style={{ alignSelf: "center" }}>
                                                            <img src={value.image} alt="ceo" style={{ width: "100%", height: "100%", borderRadius: "50%" }} title={value.name} />
                                                        </div>
                                                        <Typography align="center" color="textPrimary" gutterBottom style={{ fontWeight: "bold", fontFamily: 'Quicksand, sans-serif', margin: "10px 0" }}>
                                                            {value.name}
                                                            <hr />
                                                            {value.title}
                                                            <hr />
                                                            {value.links}
                                                        </Typography>
                                                    </Paper>
                                                </Grid>
                                                <Grid key={value.name} item xs={4} onClick={(e) => handleClick(e, value.name)}>
                                                    <Paper className={classes.paper}>
                                                        <Typography align="center" color="textPrimary" gutterBottom>
                                                            <div style={{ fontWeight: "bold", fontFamily: 'Quicksand, sans-serif', margin: "10px 0" }}>
                                                                {value.name}
                                                            </div>
                                                            <p style={{ fontFamily: 'Quicksand, sans-serif' }}>
                                                                {value.description}
                                                            </p>
                                                        </Typography>
                                                    </Paper>
                                                </Grid>
                                            </ReactCardFlip>
                                        </div>
                                    ))}
                                </Grid>
                            </Grid>
                        </div>
                    </Container>
                </div>
            </main>
        </React.Fragment>
    )
}

export default AboutUs;
