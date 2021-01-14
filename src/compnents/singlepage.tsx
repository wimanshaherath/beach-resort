import React,{Component} from 'react';
import Hero from './Hero';
import image from '../images/back2.jpg';
import {RoomContext} from '../context';
import {Grid,Typography,List,ListItem,ListItemText} from '@material-ui/core';
import {withStyles,Theme} from '@material-ui/core';

const useStyle = (theme:Theme) => ({
        root:{
            paddingTop:'2rem',
        },
        imgList:{
            padding:'0.5rem',
            justifyContent:'center'
        },
        details:{
            paddingTop:'2rem',
        },
        descript:{
            padding:'1rem'
        },
        detaliList:{
            paddingLeft:'1rem'
        },
        images:{
            width:'23rem'
        },
        texts:{
            fontWeight:800,
        }

});




interface Iparams{
  slug:string;
}

interface Imatch{
    params:Iparams;
}
type Props={
  match:Imatch;
  classes:any;
}

type State ={
    slug:string;
}
class Singlepage extends Component<Props,State>{
    constructor(props:any){
        super(props);
    
        this.state = {
            slug: this.props.match.params.slug,
        };   
    };

    componentDidMount(){}
    static contextType = RoomContext;
    render(){
        const {classes} = this.props;
        const {getRooms} = this.context;
        const room = getRooms(this.state.slug);
        console.log(room);
        if(!room){
            return(
                <div>
                     <Hero hero_title="No such room found.." btn="Back to rooms" img={image} link="/rooms"/>
                </div>
            )
        };
        const {description,capacity,size,price,pets,images,extras,breakfast} = room;
        return(

            <div>
            <Hero hero_title={this.state.slug} btn="Back to rooms" img={images[0]} link="/rooms"/>
            <Grid container className={classes.root}>
                <Grid item sm={12}>
                    <Grid container className={classes.imgList}>
                        {images.map((tile:string,index:number) => (
                            <Grid className={classes.imgList} item md={3} sm={6} xs={12} key={index}><img className={classes.images} src={tile} alt={tile} /></Grid>
                            ))}
                    </Grid>
                </Grid>
                <Grid item sm={12} className={classes.details}>
                    <Grid container>
                        <Grid item sm={8} className={classes.descript}>
                            <Typography variant="h4" component="h4">Details</Typography>
                            <Typography variant="subtitle1" component="h6">
                                {description}
                            </Typography>
                        </Grid>
                        <Grid item sm={4} className={classes.detaliList}>
                            <Typography variant="h4" component="h4">Info</Typography>
                            <List component="nav" aria-label="secondary mailbox folders">
                                <ListItem>
                                    <ListItemText primary="Price:" secondary={
                                        <Typography variant="subtitle1" component="p">${price} per night</Typography>
                                    }/> 
                                </ListItem>
                                <ListItem>
                                    <ListItemText primary="Size:" secondary={
                                        <Typography variant="subtitle1" component="p">{size} SQFT</Typography>
                                    }/> 
                                </ListItem>
                                <ListItem>
                                    <ListItemText primary="Max Capacity:" secondary={
                                        <Typography variant="subtitle1" component="p">{capacity > 1 ? `${capacity} people`: `${capacity} person`}</Typography>
                                    }/> 
                                </ListItem>
                                <ListItem>
                                    <ListItemText primary="" secondary={
                                        <Typography variant="subtitle1" component="p">{pets?"Pets are allowed":"No Pets Allowed"}</Typography>
                                    }/> 
                                </ListItem>
                                <ListItem>
                                    <ListItemText primary="" secondary={
                                        <Typography variant="subtitle1" component="p">{breakfast?"Free breakfast included":"No breakfast included"}</Typography>
                                    }/> 
                                </ListItem>
                            </List>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item sm={12} className={classes.detaliList}>
                    <Typography variant="h4" component="h4">Extras</Typography>
                    {extras.map((extra:string,index:number) => (
                        <Typography variant="subtitle1" component="h6" key={index}>- {extra}</Typography>
                    ))}
                </Grid>
            </Grid>
            </div>
            )
        }
}

export default withStyles(useStyle,{withTheme:true}) (Singlepage);