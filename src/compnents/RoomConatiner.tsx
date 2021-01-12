import React from 'react';
import { withRoomConsumer } from '../context';
import RoomFilter from './RoomFilter';
import RoomList from './RoomList';
import Loading from './Loading';

const RoomConatiner: React.FC<any> = ({context}) => {
    if(!context){return null;}
    const {loading,sortedRooms,rooms} = context;
    if(loading){
        <Loading/>
    }
    return(
        <>
            <div>
                this is room container
                {/* <RoomFilter rooms={rooms}/>
                <RoomList rooms={sortedRooms}/> */}
            </div>
        </>
    )
}

export default withRoomConsumer(RoomConatiner);


// import React from 'react';
// import { RoomConsumer } from '../context';
// import RoomFilter from './RoomFilter';
// import RoomList from './RoomList';

// const RoomContainer: React.FC = () =>{
//     return(
//         <>
//         <RoomConsumer>
//             {value => {
                
//                 if(!value){
//                     return;
//                 }
//                 const {loading,sortedRooms,rooms} = value
//                 console.log(value);
//                 return (
//                     <div>
//                         <RoomFilter rooms={rooms}/>
//                         <RoomList rooms={sortedRooms}/>
//                     </div>
//                     )
//                 }}
//         </RoomConsumer>
        
//                 </>
//     )
// }

// export default RoomContainer;