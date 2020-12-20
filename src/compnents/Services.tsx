import React from 'react';
import {Grid,Typography,Paper} from '@material-ui/core';
import {makeStyles,createStyles,Theme} from '@material-ui/core';
import classes from '*.module.css';

const useStyle = makeStyles((theme:Theme) =>
createStyles({
    root:{
        flexGrow:1,
        minHeight:'500px',
    },
    paper:{
        padding:theme.spacing(2),
        textAlign:'center',
        [theme.breakpoints.down('md')]:{
            
        },
        [theme.breakpoints.down('sm')]:{
            
        }
    }
}))
const Services: React.FC = () =>{
    const classes = useStyle();
    return(
        <Grid container>
            <Grid item md={3} sm={6} xs={12}>
                <Paper className={classes.paper}>xs3</Paper>
            </Grid>
            <Grid item md={3} sm={6} xs={12}>
                <Paper className={classes.paper}>xs3</Paper>
            </Grid>
            <Grid item md={3} sm={6} xs={12}>
                <Paper className={classes.paper}>xs3</Paper>
            </Grid>
            <Grid item md={3} sm={6} xs={12}>
                <Paper className={classes.paper}>xs3</Paper>
            </Grid>
        </Grid>        
    )
}

export default Services;