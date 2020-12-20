import React from 'react'
import Hero from '../compnents/Hero';
import image from '../images/back2.jpg';
const Error: React.FC = () => {
    return <Hero hero_title="404" children="page not found" img={image}/>
}

export default Error;