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
    rooms:Array<Iroom>;
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
    pets:boolean,
    
};

type RoomContexInterface = {
    rooms:Iroom[];
    sortedRooms:Iroom[];
    featuredRooms:Iroom[];
    loading:boolean;
    getRooms:any;
    type:string,
    price:number,
    minPrice:number,
    maxPrice:number,
    capacity:number,
    minSize:number,
    maxSize:number,
    breakfast:boolean,
    pets:boolean
    handleChange:any;
};

const RoomContext = React.createContext<RoomContexInterface | null>(null);

class RoomProivder extends Component<Props,State>{
    state={
        rooms:[],
        sortedRooms: [],
        featuredRooms: [],
        loading: true,
        type:'all',
        price:600,
        minPrice:0,
        maxPrice:600,
        capacity:1,
        minSize:0,
        maxSize:1000,
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
        const target = event.target; 
        const value = target.type === 'checkbox'? target.checked:target.value;
        const name:string = event.target.name;
        this.setState((prevState) => ({
            ...prevState,
            [name]:value
        }),this.filterRooms)
    };

    filterRooms = () =>{
        let {rooms,type,capacity,price,minSize,maxSize,minPrice,breakfast,pets} = this.state;
        let tempRooms=[...rooms];
        capacity = capacity as number;

        //filter by type
        if(type !== 'all'){
            tempRooms = tempRooms.filter((room:Iroom) => room.type === type);
        }

        //filter by capacity
        tempRooms = tempRooms.filter((room:Iroom) => room.capacity >= capacity);

        //fiter by price
        tempRooms = tempRooms.filter((room:Iroom) => room.price <= price);

        //filter by size
        tempRooms = tempRooms.filter((room:Iroom) => (room.size>=minSize && room.size<=maxSize))

        //fiter by breakfast
        if(breakfast){
            tempRooms = tempRooms.filter((room:Iroom) => room.breakfast === true);
        }

        //filter by pets
        if(pets){
            tempRooms = tempRooms.filter((room:Iroom) => room.pets === true);
        } 

        this.setState({
            sortedRooms:tempRooms
        });

        
    }
    render(){
        return(
            <RoomContext.Provider value={{...this.state, getRooms:this.getRooms, handleChange:this.handleChange}}>
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