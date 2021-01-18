import React from 'react';
import {Grid,Typography} from '@material-ui/core';
import {makeStyles,createStyles,Theme} from '@material-ui/core';

const useStyles = makeStyles((theme:Theme) =>
    createStyles({
        root:{
            marginTop:'1rem',
        }
    })
)
type Props ={
    title:string;
}
const Title: React.FC<Props> = (props) =>{
    const classes = useStyles();
    return(
        <>
        <Grid item className={classes.root} md={12} sm={12}>
            <Typography variant="h4" component="h4" align="center">
                {props.title}
            </Typography>
        </Grid>
        </>
    )
}
export default Title;