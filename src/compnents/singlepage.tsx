import React,{Component} from 'react';
import Hero from './Hero';
import image from '../images/back2.jpg';
import {Link} from 'react-router-dom';
import {RoomContext} from '../context';
import {Grid,Typography,GridList,GridListTile,List,ListItem,ListItemText} from '@material-ui/core';
import {withStyles,Theme} from '@material-ui/core';

const useStyle = (theme:Theme) => ({
        root:{
            paddingTop:'2rem',
        },
        imgList:{
            padding:'0.5rem'
        },
        details:{
            paddingTop:'2rem',
        },
        descript:{
            padding:'1rem'
        },
        detaliList:{
            paddingLeft:'1rem'
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
        const {name,description,capacity,size,price,pets,images} = room;
        return(

            <div>
            <Hero hero_title={this.state.slug} btn="Back to rooms" img={images[0]} link="/rooms"/>
            <Grid container className={classes.root}>
                <Grid item sm={12}>
                    <Grid item sm={12} className={classes.imgList}>
                        <GridList cellHeight={240} cols={8}>
                            {images.map((tile:string) => (
                            <GridListTile key={tile} cols={2}>
                                <img src={tile} alt={tile} />
                            </GridListTile>
                            ))}
                        </GridList>
                    </Grid>
                </Grid>
                <Grid item sm={12} className={classes.details}>
                    <Grid container>
                        <Grid item sm={8} className={classes.descript}>
                            <Typography variant="h3" component="h4">Description</Typography>
                            <Typography variant="body1" component="p">
                                {description}
                            </Typography>
                        </Grid>
                        <Grid item sm={4} className={classes.detaliList}>
                            <List component="nav" aria-label="secondary mailbox folders">
                                <ListItem>
                                    <ListItemText primary="Price:" secondary={
                                        <Typography variant="subtitle1" component="p">{price}</Typography>
                                    }/> 
                                </ListItem>
                                <ListItem>
                                    <ListItemText primary="Size:" secondary={
                                        <Typography variant="subtitle1" component="p">{size}</Typography>
                                    }/> 
                                </ListItem>
                                <ListItem>
                                    <ListItemText primary="Capacity:" secondary={
                                        <Typography variant="subtitle1" component="p">{capacity}</Typography>
                                    }/> 
                                </ListItem>
                                <ListItem>
                                    <ListItemText primary="Pets" secondary={
                                        <Typography variant="subtitle1" component="p">{pets?"allowed":"not allowed"}</Typography>
                                    }/> 
                                </ListItem>
                            </List>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            </div>
            )
        }
}

export default withStyles(useStyle,{withTheme:true}) (Singlepage);