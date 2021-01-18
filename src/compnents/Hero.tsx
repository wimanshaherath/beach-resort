import React from 'react';
import {Paper,Box,Typography,Button} from "@material-ui/core";
import {makeStyles,createStyles,Theme} from "@material-ui/core";
import {Link} from 'react-router-dom';

type Props ={
    hero_title:string;
    btn:string;
    img:string;
    link:string;
}

const useStyle = makeStyles((theme:Theme) =>
    createStyles({
        paperContainer:{
            flexGrow:1,
            // display:'flex',
            // backgroundImage:`url(${image})`,
            backgroundPosition: 'center', 
            backgroundSize: 'cover', 
            backgroundRepeat: 'no-repeat',
            maxHeight:'100vh',
            // width:'100vw'
            
        },
        box1:{
            width:'100%',
            height:'100vh',
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
            color:"black",
            position:'relative',
            textTransform:'capitalize',
            [theme.breakpoints.down('sm')]:{
                fontSize:'2.5rem'
            }
        },

        subtitle:{
            color:'white',
            marginTop:'2rem',
            // fontSize:'1.2rem'
        },
        button:{
            border:'3px solid',
            marginTop:'2rem',
            "&:hover":{
                border:'2px solid',
                color:'white'
            }
        },
        buttonLink:{
            textDecoration:'none',
            color:'black',
            fontWeight:800,
        }
       
    })
);
const Hero:React.FC<Props> = ({hero_title,btn,img,link}) => {
    const classes=useStyle();
    return(
        <Paper className={classes.paperContainer} style={{backgroundImage:`url(${img})`}}>
            <Box className={classes.box1}  justifyContent="left" alignItems="center">
                <Box className={classes.box} alignItems='center' p={1}>
                    <Typography className={classes.headerTitle} variant="h2" component="h2">
                        {hero_title}
                    </Typography>
                    <Button variant="outlined" color="primary" className={classes.button}><Link to={link} className={classes.buttonLink}>{btn}</Link></Button>
                </Box>
            </Box>
        </Paper>
    )

}

export default Hero;