import React from 'react';
import Hero from '../compnents/Hero';
import image from '../images/back2.jpg';

const Singlepage: React.FC = () =>{
    return(
        <div>
            <Hero hero_title="Single page" children="room" img={image}/>
            this is Singlepage</div>
    )
}

export default Singlepage;