import React from 'react';
import About from './About/About';
import Contact from './Contact/Contact';
import Home from './Home/Home';
import Projects from './Projects/Projects';
import Tecnology from './Tecnology/Tecnology';

const Homes = () => {
    return (
        <div>
            <Home></Home>
            <About></About>
            <Projects></Projects>
            <Tecnology></Tecnology>
            <Contact></Contact>
        </div>
    );
};

export default Homes;