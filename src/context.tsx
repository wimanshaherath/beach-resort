import React,{Component} from 'react';
import items from './data';

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
//   message:string;
};

type State = {
    rooms:Iroom[];
    sortedRooms:Iroom[];
    featuredRooms:Iroom[];
    loading:boolean;
    type:string,
    price:number,
    minPrice:number,
    maxPrice:number,
    capacity:number,
    minSize:number,
    maxSize:number,
    breakfast:boolean,
    pets:boolean
};

type RoomContexInterface = {
    rooms:Iroom[];
    sortedRooms:Iroom[];
    featuredRooms:Iroom[];
    loading:boolean;
    getRooms:any;
};

const RoomContext = React.createContext<RoomContexInterface | null>(null);

class RoomProivder extends Component<Props,State>{
    state={
        rooms:[],
        sortedRooms: [],
        featuredRooms: [],
        loading: true,
        type:'all',
        price:0,
        minPrice:0,
        maxPrice:0,
        capacity:1,
        minSize:0,
        maxSize:0,
        breakfast:false,
        pets:false
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
    handleChange = (event:any) =>{
        const type = event.target.type;
        const name = event.target.name;
        const value = event.target.value;

    };

    filterRooms = () =>{
        console.log("filter room");
    }
    render(){
        return(
            <RoomContext.Provider value={{...this.state, getRooms:this.getRooms}}>
                {this.props.children}
            </RoomContext.Provider>
        );
    }
}

const RoomConsumer = RoomContext.Consumer;

export const withRoomConsumer = (Component:any) =>{
    return function ConsumerWrapper(props:any){
        return <RoomConsumer>
            {(value:RoomContexInterface|null) => <Component {... props} context={value}/>}
        </RoomConsumer>;
    }
}

export {RoomProivder,RoomContext,RoomConsumer};