import React from 'react';
import {Paper,Box,Typography} from "@material-ui/core";
import {makeStyles,createStyles,Theme} from "@material-ui/core";
import image from '../images/rooms.jpg';
type Props ={
    hero_title:string;
    children:string;
}

const useStyle = makeStyles((theme:Theme) =>
    createStyles({
        paperContainer:{
            flexGrow:1,
            // display:'flex',
            backgroundImage:`url(${image})`,
            backgroundPosition: 'center', 
            backgroundSize: 'cover', 
            backgroundRepeat: 'no-repeat',
            maxHeight:'50vh',
            
        },
        box1:{
            width:'100vw',
            height:'50vh',
        },

        box:{
            position:'relative',
            minHeight:'300px',
            width:'90%',
            margin:'auto',
            background:'linear-gradient(to top, rgba(55, 236, 186,0.5) 0%, rgba(114, 175, 211,0.5) 100%);',
            textAlign:'center',
            // opacity:'0.5',
            transitionDelay:'0.2s',
            [theme.breakpoints.down('sm')]:{
                width:'90%',
                margin:'auto'
            }
        },

        headerTitle:{
            color:"white",
            position:'relative',
            [theme.breakpoints.down('sm')]:{
                fontSize:'2.5rem'
            }
        },

        subtitle:{
            color:'white',
            fontSize:'1.2rem'
        }
       
    })
);
const Hero:React.FC<Props> = ({hero_title,children}) => {
    const classes=useStyle();
    return(
        <Paper className={classes.paperContainer}>

            <Box className={classes.box1}  justifyContent="left" alignItems="center">
                <Box className={classes.box} alignItems='center' p={1}>
                    <Typography className={classes.headerTitle} variant="h2" component="h2">
                        {hero_title}
                    </Typography>
                    <Typography variant='subtitle1' component='h6' className={classes.subtitle}>
                    {children}
                    </Typography>
                </Box>
                
            </Box>
            

        </Paper>
    )

}

export default Hero;