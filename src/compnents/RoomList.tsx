import React from 'react';
import Room from './Room';
import {Grid,Typography} from '@material-ui/core';
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

    if(rooms.length === 0){
        return(
            <>
               <Grid container>
                    <Typography>No matched room is found.</Typography>
               </Grid>
            </>
        )
    }
    return(
        <>
        <Grid container>
            {rooms.map((room) => {
                return <Grid item key={Math.random()} xs = {12} sm={6} md={4}><Room room={room}/></Grid>
            })}
        </Grid>
        </>
    )
}

export default RoomList;