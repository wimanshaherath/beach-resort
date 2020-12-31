import React from 'react';
import {Card,CardActionArea,CardMedia,CardContent,Typography} from '@material-ui/core';
import {makeStyles,createStyles} from '@material-ui/core';
import {Link} from 'react-router-dom';
import { dark } from '@material-ui/core/styles/createPalette';

interface roomobject{
 name:string;
 slug:string;
 price:number;
 images:string[];
};

type Props = {
   room:roomobject;
};

const useStyles = makeStyles({
    root: {
      maxWidth:'25rem',
      margin:'0.5rem auto 0.5rem auto',
      background:'rgb(20,20,28)',
      border:'1px solid black',
      color:'white'
    },
    media: {
      height: 140,
    },
    content:{
        textAlign:'center'
    },
    title:{
        fontWeight:700,
        // fontFamily:'Roboto'
    },
    subtitle:{
        color:'white',
        fontSize:'1.5rem'
    },
    link:{
        textDecoration:'none'
    }

  });


const Room: React.FC<Props> = (props) =>{
    const classes= useStyles();
    const {name,slug,images,price}=props.room;
    return(
        <Link className={classes.link} to={`/rooms/${slug}`}>
            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia className={classes.media} title={name} image = {images[0]}/>
                    <CardContent className={classes.content}>
                    <Typography className={classes.title} gutterBottom variant="h5" component="h2">
                        {name}
                    </Typography>
                    <Typography className={classes.subtitle} variant="subtitle1" color="textSecondary" component="p">
                        ${price}
                    </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Link>
       
    )
}

export default Room;