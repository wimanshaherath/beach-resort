import React from 'react';
import {Card,CardActionArea,CardMedia,CardContent,Typography} from '@material-ui/core';

type Props = {
    id:number;
    name:string;
    price:number;
    type:string;
    img:string;
    
};

const Room: React.FC<Props> = (props) =>{
    return(
        <Card>
            <CardActionArea>
                <CardMedia title={props.name} image ={props.img}/>
                <CardContent></CardContent>
            </CardActionArea>
        </Card>
    )
}