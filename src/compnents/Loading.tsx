import React from 'react';
import image from '../images/gif/loading-arrow.gif';
import {Grid,Paper,makeStyles,Theme,createStyles} from '@material-ui/core';

const useStyle = makeStyles((theme:Theme) =>
    createStyles({
        root:{
            flexGrow:1,
            width:'100vw'
        },
        paper: {
            padding: theme.spacing(2),
            textAlign: 'center',
            justifyContent:'center',
          },
    })
)
const Loading: React.FC = () => {
    const classes = useStyle();
    return(
        <div>
            <Grid container className={classes.root}>
                <Grid item md={12} sm={12}>
                    <Paper className={classes.paper}><img src={image} alt='loading..'/></Paper>
                </Grid>
            </Grid>
        </div>
    );
}

export default Loading;