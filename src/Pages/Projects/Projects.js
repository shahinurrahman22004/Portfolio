import React from 'react';
import { NavLink } from 'react-bootstrap';
import bike from '../../images/bike.png';
import doctor from '../../images/doctor.png';
import travel from '../../images/travel.png';

const Projects = () => {
    return (
        <div id="Projects" className="container my-5">
            <h1 style={{color: 'blue'}}>Projects</h1>
            <p style={{color: 'lightblue'}}>What kind of projects i completed.</p>
            <div className="row">
                <div className="col-md-4 mb-4" style={{border: '1px solid gray', padding: '20px', borderRadius: '20px'}}>
                    <img style={{width: '100%'}} src={travel} alt="" />
                    
                    <NavLink target="_blank" style={{padding: '10px', backgroundColor: 'blue', color: 'white', textTransform: 'uppercase', width: '35%', marginTop: '15px', borderRadius: '20px', float: 'right', letterSpacing: '1px', fontWeight: '700'}} href="https://github.com/shahinurrahman22004/Travel-Lover">View Code</NavLink>

                    <NavLink target="_blank" style={{padding: '10px', backgroundColor: 'blue', color: 'white', textTransform: 'uppercase', width: '20%', marginTop: '15px', marginLeft: '30px', borderRadius: '20px', letterSpacing: '1px', fontWeight: '700'}} href="https://wonderful-austin-97207c.netlify.app/">View</NavLink>
                </div>

                <div className="col-md-4 mb-4" style={{border: '1px solid gray', padding: '20px', borderRadius: '20px'}}>
                    <img style={{width: '100%'}} src={bike} alt="" />
                    
                    <NavLink target="_blank" style={{padding: '10px', backgroundColor: 'blue', color: 'white', textTransform: 'uppercase', width: '35%', marginTop: '15px', borderRadius: '20px', float: 'right', letterSpacing: '1px', fontWeight: '700'}} href="https://github.com/shahinurrahman22004/Go-Bike-Website">View Code</NavLink>

                    <NavLink target="_blank"  style={{padding: '10px', backgroundColor: 'blue', color: 'white', textTransform: 'uppercase', width: '20%', marginTop: '15px', marginLeft: '30px', borderRadius: '20px', letterSpacing: '1px', fontWeight: '700'}} href="https://unruffled-hermann-4505de.netlify.app/">View</NavLink>
                </div>
                <div className="col-md-4 mb-4" style={{border: '1px solid gray', padding: '20px', borderRadius: '20px'}}>
                    <img style={{width: '100%'}} src={doctor} alt="" />
                    <NavLink target="_blank" style={{padding: '10px', backgroundColor: 'blue', color: 'white', textTransform: 'uppercase', width: '35%', marginTop: '15px', borderRadius: '20px', float: 'right', letterSpacing: '1px', fontWeight: '700'}} href="https://github.com/shahinurrahman22004/Health-Care-Website">View Code</NavLink>

                    <NavLink target="_blank" style={{padding: '10px', backgroundColor: 'blue', color: 'white', textTransform: 'uppercase', width: '20%', marginTop: '15px', marginLeft: '30px', borderRadius: '20px', letterSpacing: '1px', fontWeight: '700'}} href="https://frosty-mcclintock-3ce154.netlify.app/">View</NavLink>
                </div>
            </div>
        </div>
    );
};

export default Projects;