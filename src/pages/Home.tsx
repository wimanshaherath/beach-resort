import React from 'react';
import {Paper,Box,Typography} from '@material-ui/core';
import {makeStyles,createStyles,Theme} from '@material-ui/core';
import image from '../images/beach-resort-wallpaper.jpg';
import Services from '../compnents/Services';
import FeaturedRooms from '../compnents/FeaturedRooms';

const useStyle = makeStyles((theme:Theme) =>
    createStyles({
        paperContainer:{
            flexGrow:1,
            // display:'flex',
            backgroundImage:`url(${image})`,
            backgroundPosition: 'center', 
            backgroundSize: 'cover', 
            backgroundRepeat: 'no-repeat',
            maxHeight:'90vh',
            
        },
        box1:{
            // width:'100%',
            height:'91vh',
        },

        box:{
            minHeight:'500px',
            width:'600px',
            marginTop:'2rem',
            background:'linear-gradient(to top, rgba(55, 236, 186,0.5) 0%, rgba(114, 175, 211,0.5) 100%);',
            // opacity:'0.5',
            [theme.breakpoints.down('sm')]:{
                width:'90%'
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

const Home: React.FC = () =>{
    const classes=useStyle();
    return(
        <div>
            <Paper className={classes.paperContainer}>
                <Box className={classes.box1}  justifyContent="left" alignItems="center" p={2}>
                    <Box className={classes.box} justifyContent='center' alignItems='center' p={1}>
                        <Typography className={classes.headerTitle} variant="h2" component="h2">
                            Beach Resort
                        </Typography>
                        <Typography variant='subtitle1' component='h6' className={classes.subtitle}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ac turpis egestas maecenas pharetra convallis posuere morbi leo urna. Amet tellus cras adipiscing enim eu turpis egestas. Felis eget velit aliquet sagittis id consectetur. Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi tristique. At lectus urna duis convallis convallis tellus id. Convallis tellus id interdum velit laoreet id. Vitae justo eget magna fermentum iaculis eu non diam. Mauris in aliquam sem fringilla ut. Amet consectetur adipiscing elit pellentesque. Tincidunt ornare massa eget egestas purus viverra. Rutrum tellus pellentesque eu tincidunt tortor.
                        </Typography>
                    </Box>
                </Box>
            </Paper>
            <Services/>
            <FeaturedRooms/>
        </div>
    )
}

export default Home;