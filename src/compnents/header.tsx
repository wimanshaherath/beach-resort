import React from 'react';
import {Typography,AppBar,Toolbar,Paper,Box} from '@material-ui/core';
import {List,ListItem,ListItemText} from '@material-ui/core';
import { createStyles, fade, Theme, makeStyles } from '@material-ui/core/styles';
import image from '../images/beach-resort-wallpaper.jpg';


const useStyle = makeStyles((theme:Theme) =>
    createStyles({
        paperContainer:{
            flexGrow:1,
            // display:'flex',
            backgroundImage:`url(${image})`,
            backgroundPosition: 'center', 
            backgroundSize: 'cover', 
            backgroundRepeat: 'no-repeat',
            minHeight:'100vh',
            
        },
        appbar:{
            // background:'rgba(225,225,225,0.5)',
            background:'linear-gradient(to top, rgba(55, 236, 186,0.5) 0%, rgba(114, 175, 211,0.5) 100%);',
            boxShadow:'none',
            maxHeight:'4rem',
            
        },

        title: {
            fontWeight:600,
            color:'black',
            [theme.breakpoints.down('sm')]: {
              fontSize:'1.5rem',
            },
        },
        navLinks:{
            display:'flex',
            marginLeft:'2rem',
            justifyContent:'center',
            alignItems:'center'
        },
        linkText:{
            textDecoration:'none',
            fontWeight:'bold',
            color:'black',
            // fontWeight:'bold',
            transitionDelay:'.2s',
            textTransform:'uppercase',
            "&:hover":{
                // background:'#ffffff',
                borderBottom:'2px solid  #ffffff'
            },
            [theme.breakpoints.down('sm')]:{
                color:'white',
                fontWeight:600
            },
        },
        listitemtext:{
            fontWeight:'bold',
        },
        box1:{
            width:'100vw',
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
const Header: React.FC =() => {
    const classes=useStyle();
    return(
        <Paper className={classes.paperContainer}>
            <AppBar className={classes.appbar} position='static'>
                <Toolbar>
                    <Typography className={classes.title} variant="h4" component='h3' noWrap> 
                        Beach Resort
                    </Typography>
                    <List className={classes.navLinks} component="nav" aria-labelledby="main navigation">
                        
                        <a className={classes.linkText} href='#' key='HOME'>
                            <ListItem button>
                            <ListItemText primary='HOME' />
                            </ListItem>
                        </a>
                        <a className={classes.linkText} href='#' key='About us'>
                            <ListItem button>
                            <ListItemText primary='About us' />
                            </ListItem>
                        </a>
                        
                    </List>
                </Toolbar>
               
            </AppBar>
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
    );
}

export default Header;