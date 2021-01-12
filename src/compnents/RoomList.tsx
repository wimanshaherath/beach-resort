import React from 'react';
import Room from './Room';
import {Grid} from '@material-ui/core';

type Irooms = {
    id:string;
    name:string;
    description:string;
    capacity:number;
    size:number;
    price:number;
    pets:boolean;
    images:string[];
    extras:string[];
    breakfirst:boolean;
    featured:boolean;
    type:string;
    slug:string;
}

type Props= {
    rooms:Irooms[];
}
const RoomList: React.FC<Props> = ({rooms}) =>{
    return(
        <>
        <Grid container>
            
        </Grid>
        </>
    )
}

export default RoomList;