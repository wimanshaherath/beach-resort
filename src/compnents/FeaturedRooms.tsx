import React,{Component} from 'react';
import {RoomContext} from '../context';

type Props={

};

type State={

};

export default class FeaturedRooms extends Component<Props,State>{
    static contextType = RoomContext;
    render(){
        const {featureadRooms}=this.context;
        console.log(featureadRooms);
        return(
            <div>Featured room</div>
        )
    }
} 