import React,{Component} from 'react';
import items from './data';

type Props = {
//   message:string;
};

type State = {
    rooms:object;
    sortedRooms:object;
    featuredRooms:object;
    loading:boolean;
};

type RoomContexInterface = {

};

const RoomContext = React.createContext<RoomContexInterface | null>(null);

class RoomProivder extends Component<Props,State>{
    state={
        rooms:[],
        sortedRooms: [],
        featuredRooms: [],
        loading: true,
    };


    componentDidMount(){
        let rooms=this.formatData(items);
        let featuredRooms=rooms.filter((room:any) => room.featured === true);

        this.setState({
            rooms,
            featuredRooms,
            sortedRooms:rooms, 
            loading:false
        });
    };

    formatData(items:any){
        let itemList=items.map((item:any) => {
            let id:number=item.sys.id;
            let images=item.fields.images.map((img:any) => img.fields.file.url);
            let rooms = {...item.fields,images,id};
            return rooms;
        })
        return itemList;
    };

    getRooms = (slug:string) =>
    {
        let tempRooms=[...this.state.rooms];
        const room=tempRooms.find((room:any) => room.slug === slug);
        return room;
    };

    render(){
        return(
            <RoomContext.Provider value={{...this.state, getRooms:this.getRooms}}>
                {this.props.children}
            </RoomContext.Provider>
        );
    }
}

const RoomConsumer = RoomContext.Consumer;

export {RoomProivder,RoomContext,RoomConsumer};