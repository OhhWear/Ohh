import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Background from '../background.png'
import Grid from '@material-ui/core/Grid';
import CardMedia from '@material-ui/core/CardMedia';
import Card from '@material-ui/core/Card';
import Present1 from './Assets/present_1.jpg';
import Present2 from './Assets/present_2.jpg';
import GroupSelfie from './Assets/group_selfie.jpg';
import GroupBack from './Assets/group_back.jpg';
import IMMC from './Assets/immc.png';
import IMMU from './Assets/immu.png';
import NITD from './Assets/nitd.png';
import Christ from './Assets/christ.png';
import Symbiosis from './Assets/symbiosis.png';

const cards = [
    {
        key: 0,
        image: Present1,
        heading: "Lets Fight It Together",
        description: "Breast cancer patients suffer from loss of identity, insecurity and depression. We believe you shouldn't be dealing with breast cancer alone.",
        links: ""
    },
    {
        key: 1,
        image: Present2,
        heading: "Be Brave",
        description: "The stigma and discrimination on topics like breast cancer is all too well known in India. We're going against the grain, starting discussions about sensitive topics and helping women deal with these issues.",
        links: ""
    },
    {
        key: 2,
        image: GroupSelfie,
        heading: "Sustainable Style, Backed by Science",
        description: "Our offerings are affordable bras that accomodate prosthesis. They are wire-free, plastic-free and are made with high-quality organic fabrics.",
        links: ""
    },
    {
        key: 3,
        image: GroupBack,
        heading: "Your Clothes Will Kill You Slowly But Surely!",
        description: "We have the illusion that clothes made from synthetic fibers are safe, but the materials are in fact full of invisible chemicals the clothing industry prefers we don't think about.",
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
        textAlign: 'left',
        fontSize: "21.5px",
        fontFamily: 'Quicksand, sans-serif',
        margin: "10px 0"
    },
    h1: {
        textAlign: 'center',
        fontFamily: 'Quicksand, sans-serif',
        margin: "0 10px",
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    cardMedia: {
        paddingTop: '56.25%', // 16:9
    },
    cardMediaSqaure: {
        paddingTop: '100%',
    },
    cardGrid: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(8),
    },
    cardContent: {
        flexGrow: 1
    },
    margin: {
        margin: theme.spacing(1),
    },
}));


export default function Story() {
    const classes = useStyles();
    const images = [IMMC, IMMU, NITD, Christ];
    return (
        <>
            <CssBaseline />
            <div className={classes.root}>
                <Grid container spacing={0}>
                    <Grid item xs={12}>
                        <div className={classes.h1}>
                            <h1 style={{ fontSize: "80px", margin: "10px" }}>
                                Our Story
                            </h1>
                        </div>
                    </Grid>
                    <Grid item xs={12} className={classes.card}>
                        <Container>
                            <div className={classes.div}>
                                It was the 1-hour lunch break on a normal college day that we were Sitting around our usual marble-topped table in the college canteen.
                                The usuals - The studious Vidya Karturi, the silent-killer Himani, the jovial Navya and the notorious Puneeth Suraana.
                                We were always bouncing fancy, hilarious and bordering-dreamy ideas.
                            </div>
                            <div className={classes.div}>
                                This day the clear winner seemed like a range of glow-in-the-dark condoms.
                                Somewhere in the hilarious conversation (We’d christened the company “going bananas!” and also took the critical first step of creating a Whatsapp group and finding a manufacturer in Chennai! But Navya’s veg biryani distracted us!)
                                Somewhere, the conversation took a turn towards bras and bra-problems! We discussed, dissected and deep-dived into topics from Kamasutra to Kindness*, from success secrets to spss programming, from self-protection to sponsorships!
                                The bra-woes took over the conversation immediately and a laundry list of problems was soon turned to hilarious jokes!
                                The lunch ended but the conversation lingered in our minds.
                                A few days later, Puneet received a mail from IIM-Calcutta about a business-plan pitch fest. The enthusiastic fester and the last bencher that he was, he jumped onto the idea and narrowed down on two ideas. - A condom company or a bra company.
                                It was up to the 3 girls over another college lunch to pick which one to go ahead with. But, they said no! Both were jokes and not business ideas!
                                Unwilling to let go so easily, Puneeth went ahead and began creating a business plan.
                                It soon dawned that one would need a pharma company to begin selling condom and the plan died in the tracks. But, the random research of looking at bra problems was shockingly revealing!
                            </div>
                            <div className={classes.div}>
                                Bras directly linked to so many health issues was startling! Over 70% wore the wrong size. Every bra ever made still exists! The underwires became a receiving antenna for wifi signals and were linked to fibrocystic breasts!
                                The aluminium in the roll-ons and perfumes were getting trapped due to the bra fabric and outright blocking the lymph system!
                                In short, bras were slowly and steadily killing women!
                            </div>
                            <div className={classes.div} style={{ fontWeight: "bold" }}>
                                To be continued . . .
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
                                    />
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
                <Grid item xs={12}>
                    <div className={classes.h1}>
                        <h1 style={{ fontSize: "40px" }}>
                            We have won awards at many top universities!
                        </h1>
                    </div>
                </Grid>
                <Container className={classes.cardGrid} maxWidth="lg">
                    <Grid container spacing={3}>
                        {images.map((img) => (
                            <Grid item xs={6} sm={3} md={3}>
                                <Card className={classes.card}>
                                    <CardMedia
                                        image={img}
                                        className={classes.cardMediaSqaure}
                                    />
                                </Card>
                            </Grid>
                        ))}
                        {/* <Grid item xs={6} sm={3} md={3}>
                            <Card className={classes.card}>
                                <CardMedia
                                    image={IMMC}
                                    className={classes.cardMediaSqaure}
                                />
                            </Card>
                        </Grid>
                        <Grid item xs={6} sm={3} md={3}>
                            <Card className={classes.card}>
                                <CardMedia
                                    className={classes.cardMediaSqaure}
                                    image={IMMU}
                                />
                            </Card>
                        </Grid>
                        <Grid item xs={6} sm={3} md={3}>
                            <Card className={classes.card}>
                                <CardMedia
                                    className={classes.cardMediaSqaure}
                                    image={NITD}
                                />
                            </Card>
                        </Grid>
                        <Grid item xs={6} sm={3} md={3}>
                            <Card className={classes.card}>
                                <CardMedia
                                    className={classes.cardMediaSqaure}
                                    image={Christ}
                                />
                            </Card>
                        </Grid> */ }
                    </Grid>
                </Container>
            </div>
        </>
    );

}