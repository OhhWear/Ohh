import React, { FC, useState } from 'react';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import { Container } from '@material-ui/core'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const styles = {
  width: '100%',
  display: 'flex',
  justifyContent: "center",
  marginBottom: "20px",
  borderRadius: "10px"
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      marginBottom: "20px"
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    control: {
      padding: theme.spacing(2),
    },
  }),
);



const images = [
  "https://images.unsplash.com/photo-1568441556126-f36ae0900180?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1048&q=80",
  "https://images.unsplash.com/photo-1494698852314-652666555934?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80"
];

export const ImageCarousel: FC = () => {
    return (
      <div>

      </div>
    )
  }