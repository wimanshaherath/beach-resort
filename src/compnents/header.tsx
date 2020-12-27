import React from 'react';
import {Typography,AppBar,Toolbar} from '@material-ui/core';
import {List,ListItem,ListItemText} from '@material-ui/core';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import {Link} from 'react-router-dom';
// import Home from '../pages/Home';
// import Rooms from '../pages/Rooms';
// import image from '../images/beach-resort-wallpaper.jpg';


const useStyle = makeStyles((theme:Theme) =>
    createStyles({
        // paperContainer:{
        //     flexGrow:1,
        //     // display:'flex',
        //     backgroundImage:`url(${image})`,
        //     backgroundPosition: 'center', 
        //     backgroundSize: 'cover', 
        //     backgroundRepeat: 'no-repeat',
        //     minHeight:'100vh',
            
        // },
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
                color:'black',
                fontWeight:600
            },
        },
        listitemtext:{
            fontWeight:'bold',
        },
        
    })
);
const Header: React.FC =() => {
    const classes=useStyle();
    return(
        <AppBar className={classes.appbar} position='static'>
            <Toolbar>
                <Typography className={classes.title} variant="h4" component='h3' noWrap> 
                    Beach Resort
                </Typography>
                <List className={classes.navLinks} component="nav" aria-labelledby="main navigation">
                    <Link to="/" className={classes.linkText} key='HOME'>
                        <ListItem button>
                        <ListItemText primary='HOME' />
                        </ListItem>
                    </Link>
                    <Link to="/rooms" className={classes.linkText} key='Rooms'>
                        <ListItem button>
                        <ListItemText primary='Rooms' />
                        </ListItem>
                    </Link>
                </List>
            </Toolbar>
        </AppBar>
    );
}

export default Header;