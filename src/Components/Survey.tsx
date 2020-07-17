import React, { useState } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import Background from '../background.png';
import { Card, Grid, Typography, Button } from '@material-ui/core';

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
    const [typeOfSurvey, setSurvey] = useState(0); // false : patient, true: doctor

    const renderForm = () => {
        if (typeOfSurvey === 1) return <iframe title="survey" src="https://docs.google.com/forms/d/e/1FAIpQLSeCr9TahWt6_OALvIpfxxn53uFd_e55VC0FrHjQGeDZu185yQ/viewform?embedded=true" width="100%" height="1400vh">Loading…</iframe>;
        else if (typeOfSurvey === 2 ) return <iframe title="survey" src="https://docs.google.com/forms/d/e/1FAIpQLSdFyY6p-3t2Lqe1xBYpl-lt9NkbMGff5A0NqlHSL42mMMs6RA/viewform?embedded=true"  width="100%" height="2000vh">Loading…</iframe>;
        else return (
            <div style = {{display: "flex", justifyContent: "space-around"}}>
                <Button variant="contained" color="primary" style = {{textTransform: "none"}} onClick = {() => setSurvey(1)}>I am a patient / caregiver</Button>
                <Button variant="contained" color="secondary" style = {{textTransform: "none"}} onClick = {() => setSurvey(2)}>I am a medical professional</Button>
            </div>
        );        
    }

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
                                We are taking a closer look at core issues facing the beautiful women who are fighting breast cancer by bringing light to unaddressed problems.
                            </Typography> 
                            <img alt = "closerLook" style = {{width: "300px", margin: "0 auto", display:"flex", justifyContent: "center"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQsgibr_5TfJRf87d_t656HdDd-W0dMNt-MfdxDyowHO-lQSACDA&s"></img>
                        </Card>
                    </Grid>
                </Grid>
                <div style ={{margin: "30px 0"}} >
                    {renderForm()}
                </div>
            </main>
        </React.Fragment>
    );
}