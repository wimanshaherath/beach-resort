import React from 'react';
import Hero from '../compnents/Hero';
import image from '../images/room2.jpg';

const Rooms: React.FC = () =>{
    return(
        <div>
            <Hero hero_title="Rooms" children="best rooms" img={image}/>
        </div>
    )
}

export default Rooms;