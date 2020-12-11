import React from 'react';
import {Paper,Box,Typography} from '@material-ui/core';
import {makeStyles,createStyles,Theme} from '@material-ui/core';

const useStyle=makeStyles((theme:Theme) =>
    createStyles({
        paperContainer:{
            position:'relative',
            bottom:'0',
            minHeight:'6rem',
            width:'100vw',
            background:'rgb(55, 236, 186)'
        }
    })
)
const Footer:React.FC=() => {
    const classes=useStyle();
    return(
        <Paper className={classes.paperContainer}>
            <Typography variant='h4' component='h4'>
                footer
            </Typography>
        </Paper>
    );
}

export default Footer;