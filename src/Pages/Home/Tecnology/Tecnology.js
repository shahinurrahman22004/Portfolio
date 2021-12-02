import React from 'react';
import './Tecnology.css';

const Tecnology = () => {
    return (
        <div id="tecnology" className="container tecnology">
            <h1 style={{color: 'blue'}}>Technology</h1>
            <p style={{color: 'lightblue', marginBottom: '40px'}}>What type technology i used?</p>
            <div className="row">
                <div className="col-md-3 col-sm-6" style={{marginBottom: '20px'}}>
                    <img src="https://i.ibb.co/NZhp07g/html-1.png" alt="" />
                </div>
                <div className="col-md-3 col-sm-6" style={{marginBottom: '20px'}}>
                    <img src="https://i.ibb.co/MpdS4VS/html3.png" alt="" />
                </div>
                <div className="col-md-3 col-sm-6" style={{marginBottom: '20px'}}>
                    <img src="https://i.ibb.co/WtybbhY/javascript.png" alt="" />
                </div>
                <div className="col-md-3 col-sm-6" style={{marginBottom: '20px'}}>
                    <img src="https://i.ibb.co/YPRVVsb/bootstrap.png" alt="" />
                </div>
                <div className="col-md-3 col-sm-6" style={{marginBottom: '20px'}}>
                    <img src="https://i.ibb.co/23YDv2x/react.png" alt="" />
                </div>
                <div className="col-md-3 col-sm-6" style={{marginBottom: '20px'}}>
                    <img src="https://i.ibb.co/cL9rRwg/firebase.png" alt="" />
                </div>
                <div className="col-md-3 col-sm-6" style={{marginBottom: '20px'}}>
                    <img src="https://i.ibb.co/nBCvt58/mongodb.png" alt="" />
                </div>
                <div className="col-md-3 col-sm-6" style={{marginBottom: '20px'}}>
                    <img src="https://i.ibb.co/GP630YQ/netlify.png" alt="" />
                </div>
                <div className="col-md-3 col-sm-6" style={{marginBottom: '20px'}}>
                    <img src="https://i.ibb.co/KDyK9Vg/heroku.png" alt="" />
                </div>
                <div className="col-md-3 col-sm-6" style={{marginBottom: '20px'}}>
                    <img src="https://i.ibb.co/ZcJ0H3L/nodejs.png" alt="" />
                </div>
                <div className="col-md-3 col-sm-6" style={{marginBottom: '20px'}}>
                    <img src="https://i.ibb.co/3dSVcp8/logo.png" alt="" />
                </div>
                <div className="col-md-3 col-sm-6" style={{marginBottom: '20px'}}>
                    <img src="https://i.ibb.co/wdbtjLP/twitter-square-daf77586b35e90319725e742f6e069f9.jpg" alt="" />
                </div>
            </div>
            <div className="row">
                <div className="col-md-6" style={{textAlign: 'left', border:'1px solid gray', padding: '20px', borderRadius: '20px'}}>
                    <p style={{paddingLeft: '15px', color: 'blue'}}>Web design</p>
                    <ul>
                        <div className="row">
                            <div className="col-md-4 col-sm-6">
                                <li>HTML</li>
                            </div>
                            <div className="col-md-4 col-sm-6">
                                <li>CSS</li>
                            </div>
                            <div className="col-md-4 col-sm-6">
                                <li>Bootstrap & React Bootstrap</li>
                            </div>
                            <div className="col-md-4 col-sm-6">
                                <li>Tailwind & React Tailwind</li>

                            </div>
                            <div className="col-md-4 col-sm-6">
                                <li>Material UI</li>
                            </div>
                        </div>
                        
                    </ul>
                </div>

                <div className="col-md-6" style={{textAlign: 'left', border:'1px solid gray', padding: '20px', borderRadius: '20px'}}>
                    <p style={{paddingLeft: '15px', color: 'blue'}}>Web development</p>
                    <ul style={{textAlign: 'left'}}>
                        <div className="row">
                            <div className="col-md-4 col-sm-6">
                                <li>Javascript</li>
                            </div>
                            <div className="col-md-4 col-sm-6">
                                <li>React Js</li>
                            </div>
                            <div className="col-md-4 col-sm-6">
                                <li>React Router</li>
                            </div>
                            <div className="col-md-4 col-sm-6">
                                <li>Mongo DB</li>
                            </div>
                            <div className="col-md-4 col-sm-6">
                                <li>Firebase</li>
                            </div>
                            
                        </div>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Tecnology;