import React from 'react';
import {Grid,Typography,Paper,Card,CardActionArea,CardContent} from '@material-ui/core';
import {makeStyles,createStyles,Theme} from '@material-ui/core';
import {FaCocktail,FaBeer,FaShuttleVan,FaWifi} from 'react-icons/fa';
export type Service = {
    icon:JSX.Element;
    title:string;
    description:string;
}

const useStyle = makeStyles((theme:Theme) =>
createStyles({
    mainroot:{
        boxShadow:'none'
    },
    root:{
        flexGrow:1,
        minHeight:'10rem',
        boxShadow:'none'
    },
    paper:{
        padding:theme.spacing(2),
        textAlign:'center',
        [theme.breakpoints.down('md')]:{
            
        },
        [theme.breakpoints.down('sm')]:{
            
        }
    },
    card:{
        boxShadow:'none',
    },

    cardmedia:{
        
        fontSize:'4rem'
    }
}))


const Services: React.FC = () =>{
    const classes = useStyle();
    // const [services, setServices] = useState<Service[]>(
    const services = [
            {
                icon:<FaCocktail/>,
                title:"free cocktails",
                description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. A arcu cursus vitae congue mauris."
            },
            {
                icon:<FaBeer/>,
                title:"strong beer",
                description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. A arcu cursus vitae congue mauris."
            },
            {
                icon:<FaShuttleVan/>,
                title:"free shuttle",
                description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. A arcu cursus vitae congue mauris."
            },
            {
                icon:<FaWifi/>,
                title:"free wifi",
                description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. A arcu cursus vitae congue mauris."
            }
        ]
    // );


    return(
        <Grid container className={classes.mainroot}>
            <Grid item xs={12}>
                <Paper className={classes.paper}>
                    <Typography variant="h4" component="h4">
                        Services
                    </Typography>
                </Paper>
            </Grid>
            {services.map((service,index)=>{
                return <Grid className={classes.root} item md={3} sm={6} xs={12} key={index}>
                    <Paper className={classes.paper}>
                        <Card className={classes.card}>
                            <CardActionArea className={classes.cardmedia}>
                                {service.icon}
                            </CardActionArea>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h6">
                                    {service.title}
                                </Typography>
                                <Typography variant='body2' component='p'>
                                    {service.description}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Paper>
                </Grid>
                }
            )}
        </Grid>        
    )
}

export default Services;