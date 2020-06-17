import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import Background from '../background.png';
import { Card, Grid, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    container: {
        backgroundImage: `url(${Background})`,
        backgroundSize: "contain",
        backgroundPosition: "center"
    },
    media: {
        height: "300px",
        width: "300px"
    },

}));



export default function Survey() {
    const classes = useStyles();

    return (
        <React.Fragment>
            <CssBaseline />
            <main className={classes.container}>
                <Grid
                    container
                    spacing={0}
                    direction="column"
                    alignItems="center"
                    justify="center"
                    style={{ minHeight: '40vh'}}
                >
                    <Grid item xs={12}>
                        <Card style = {{margin: "20px 20px", padding: "20px 0"}}>
                            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom style={{ fontFamily: 'Quicksand, sans-serif', fontWeight: "bold" }}>
                                Take Our Survey!
                            </Typography>
                            <Typography component="p" align="center" color="textPrimary" gutterBottom style={{ fontFamily: 'Quicksand, sans-serif', fontSize: "25px", margin: "20px 10px", textAlign: "left"}}>
                                We are taking a closer look at core issues facing the beautiful woman who are fighting breast cancer by bringing light to unadressed problems.
                            </Typography> 
                            <img alt = "closerLook" style = {{width: "300px", display:"flex", justifyContent: "center"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQsgibr_5TfJRf87d_t656HdDd-W0dMNt-MfdxDyowHO-lQSACDA&s"></img>
                        </Card>
                    </Grid>
                </Grid>
                <div style ={{margin: "30px 0"}} >
                    <iframe title="survey" src="https://docs.google.com/forms/d/e/1FAIpQLSdFyY6p-3t2Lqe1xBYpl-lt9NkbMGff5A0NqlHSL42mMMs6RA/viewform?embedded=true" width="100%" height="1963">Loading…</iframe>
                </div>
            </main>
        </React.Fragment>
    );
}