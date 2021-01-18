import React from 'react';
import {useContext} from 'react';
import {RoomContext} from '../context';
import {Grid} from '@material-ui/core';
import {makeStyles,createStyles,Theme} from '@material-ui/core';
import '../items.css';
import Title from './Title';

const useStyles = makeStyles((theme:Theme) => 
    createStyles({
        root:{
            flexGrow:1,
            width:'100vw',
            padding:'1rem',
            minHeight:'7rem',
            
        },
    })
)

interface Iroom{
    id:string;
    name:string;
    description:string;
    capacity:number;
    size:number;
    price:number;
    pets:boolean;
    images:string[];
    extras:string[];
    breakfast:boolean;
    featured:boolean;
    type:string;
    slug:string;
}

type Props = {
    rooms:Array<Iroom>;
}

const getUnique = (items:Array<Iroom>,value:any) =>{
    return Array.from(new Set(items.map((item:any) => item[value])))
}

const RoomFilter: React.FC<Props> = ({rooms}) =>{
    const classes = useStyles();
    const context = useContext(RoomContext);
    if(!context){return null;}
    const {type,capacity,price,minPrice,maxPrice,minSize,maxSize,pets,breakfast,handleChange} = context;
    let types =getUnique(rooms,'type');
    // console.log(typeof(types))
    types = ['all', ...types]
    
    let people = getUnique(rooms,'capacity');
    
    return(
        <>
        <Title title='Search rooms'/>
        <form className="optionForm">
            <Grid container className={classes.root}>
                {/* Room type */}
                <Grid item md={2} sm={6} xs={12}>
                  <label htmlFor="Type" className="label">Room type</label>  
                  <select name='type' id="type" className="optionbar" value={type} onChange={handleChange}>
                    {types.map((item,index) => {return <option value={item} key={index}>{item}</option>})}
                  </select>
                </Grid>

                {/* Room capacity */}
                <Grid item md={2} sm={6} xs={12}>
                  <label htmlFor="capacity" className="label">Capacity</label>  
                  <select name='capacity' id="capacity" className="optionbar" value={capacity} onChange={handleChange}>
                    {people.map((item,index) => {return <option value={item} key={index}>{item}</option>})}
                  </select>
                </Grid>

                {/* Room price */}
                <Grid item md={2} sm={6} xs={12}>
                  <label htmlFor="price" className="label">Price ${price}</label>  
                  <input type="range" name = "price" id="range" min={minPrice} max={maxPrice} value={price} onChange={handleChange} className="optionbar"/>
                </Grid>

                
            </Grid>
        </form>
        </>
    )
}

export default RoomFilter;