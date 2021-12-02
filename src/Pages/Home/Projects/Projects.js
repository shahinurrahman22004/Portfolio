import React from 'react';
import { NavLink } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Bike from '../Bike/Bike';

const Projects = () => {
    return (
        <div id="Projects" className="container my-5">
            <h1 style={{color: 'blue'}}>Projects</h1>
            <p style={{color: 'lightblue'}}>What kind of projects i completed.</p>
            <div className="row">
                <div className="col-md-4 mb-4" style={{border: '1px solid gray', padding: '20px', borderRadius: '20px'}}>
                    <img style={{width: '100%'}} src="https://i.ibb.co/0YJYJH5/travel.png" alt="" />
                    
                    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', paddingTop: '20px'}}>
                        
                        <NavLink target="_blank" style={{padding: '10px', backgroundColor: 'blue', color: 'white', textTransform: 'uppercase', width: '20%', borderRadius: '20px', letterSpacing: '1px', fontWeight: '700'}} href="https://wonderful-austin-97207c.netlify.app/">View</NavLink>

                        <Link to="/travel">
                        <button style={{padding: '10px 20px', backgroundColor: 'blue', color: 'white', textTransform: 'uppercase', borderRadius: '20px', letterSpacing: '1px', fontWeight: '700', marginRight: '10%', border: 'none', margin:'0 20px'}}>Details</button>
                        </Link>

                    </div>
                </div>

                <div className="col-md-4 mb-4" style={{border: '1px solid gray', padding: '20px', borderRadius: '20px'}}>
                    <img style={{width: '100%'}} src="https://i.ibb.co/TTMF7GS/bike.png" alt="" />
                    
                    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', paddingTop: '20px'}}>
                        
                        <NavLink target="_blank" style={{padding: '10px', backgroundColor: 'blue', color: 'white', textTransform: 'uppercase', width: '20%', borderRadius: '20px', letterSpacing: '1px', fontWeight: '700'}} href="https://unruffled-hermann-4505de.netlify.app/">View</NavLink>

                        <Link to="/bike">
                        <button style={{padding: '10px 20px', backgroundColor: 'blue', color: 'white', textTransform: 'uppercase', borderRadius: '20px', letterSpacing: '1px', fontWeight: '700', marginRight: '10%', border: 'none', margin:'0 20px'}}>Details</button>
                        </Link>

                    </div>

                </div>
                <div className="col-md-4 mb-4" style={{border: '1px solid gray', padding: '20px', borderRadius: '20px'}}>
                    <img style={{width: '100%'}} src="https://i.ibb.co/WgSVwtf/doctor.png" alt="" />

                    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', paddingTop: '20px'}}>
                        
                        <NavLink target="_blank" style={{padding: '10px', backgroundColor: 'blue', color: 'white', textTransform: 'uppercase', width: '20%', borderRadius: '20px', letterSpacing: '1px', fontWeight: '700'}} href="https://frosty-mcclintock-3ce154.netlify.app/">View</NavLink>

                        <Link to="/doctor">
                        <button style={{padding: '10px 20px', backgroundColor: 'blue', color: 'white', textTransform: 'uppercase', borderRadius: '20px', letterSpacing: '1px', fontWeight: '700', marginRight: '10%', border: 'none', margin:'0 20px'}}>Details</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;