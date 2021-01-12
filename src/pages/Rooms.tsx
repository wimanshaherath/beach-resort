import React from 'react';
import Hero from '../compnents/Hero';
import image from '../images/room2.jpg';
import RoomContainer from '../compnents/RoomConatiner';

const Rooms: React.FC = () =>{
    return(
        <div>
            <Hero hero_title="Rooms" btn="Back to Home" img={image} link="/"/>
            <RoomContainer/>
        </div>
    )
}

export default Rooms;