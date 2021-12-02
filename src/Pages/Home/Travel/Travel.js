import React from 'react';
import { Nav } from 'react-bootstrap';
import './Travel.css';

const Travel = () => {
    return (
        <div className="travel">
            <h1 style={{fontWeight: '700', margin: '20px 0'}}>Travel Lover</h1>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 pb-3">
                        <h3 style={{textAlign: 'left', color: 'blue', marginLeft: '10px'}}>Abour Travel Lover</h3>
                        <ul style={{float: 'left', textAlign:  'left'}}>
                            <li>I have used React to develop this website.</li>

                            <li>This is a Travel Booking Website.</li>

                            <li>I have used React Bootstrap and bootstap for responsive and design.</li>
                            
                            <li>I have used react-route-dom.</li>

                            <li>I have used Database Mongodb.</li>

                            <li>Images hosted by ImgBB.</li>
                        </ul>
                    </div>

                    <div className="col-md-6">
                        <h3 style={{color: 'blue', textAlign:'left', marginLeft: '10px'}}>Features</h3>
                        <ul style={{float: 'left', textAlign:  'left'}}>
                            <li>Fully Responsive and all device supported.</li>

                            <li>Easly Booking system.</li>

                            <li>OnClick Login.</li>

                            <li>Easly manage Your Orders.</li>

                            <li>Easy to add new service.</li>
                        </ul>
                    </div>
                </div>

                <div style={{display: 'flex', margin: '20px 0', justifyContent: 'center', alignItems: 'center'}}>
                    <Nav.Link target="_blank" style={{padding: '10px', backgroundColor: 'blue', color: 'white', textTransform: 'uppercase', borderRadius: '20px', letterSpacing: '1px', fontWeight: '700', padding: '10px 20px'}} href="https://wonderful-austin-97207c.netlify.app/">See Website</Nav.Link>

                    <Nav.Link target="_blank" style={{padding: '10px', backgroundColor: 'blue', color: 'white', textTransform: 'uppercase', borderRadius: '20px', letterSpacing: '1px', fontWeight: '700', padding: '10px 20px', margin: '0 20px'}} href="https://github.com/shahinurrahman22004/Travel-Lover">See Clint site Code</Nav.Link>

                    <Nav.Link target="_blank" style={{padding: '10px', backgroundColor: 'blue', color: 'white', textTransform: 'uppercase', borderRadius: '20px', letterSpacing: '1px', fontWeight: '700', padding: '10px 20px'}} href="https://github.com/shahinurrahman22004/Travel-lover-server">See Server site Code</Nav.Link>
                </div>

                <div className="row">
                    <div className="col-md-4 mb-3" style={{border: '1px solid gray', padding: '20px', backgroundColor: '#eee', borderRadius:'20px'}}>
                        <img style={{width:'100%'}} src="https://i.ibb.co/5498stn/one.png" alt="" />
                    </div>
                    <div className="col-md-4 mb-3" style={{border: '1px solid gray', padding: '20px', backgroundColor: '#eee', borderRadius:'20px'}}>
                        <img style={{width:'100%'}}  src="https://i.ibb.co/hWyVCtp/two.png" alt="" />
                    </div>
                    <div className="col-md-4 mb-3" style={{border: '1px solid gray', padding: '20px', backgroundColor: '#eee', borderRadius:'20px'}}>
                        <img style={{width:'100%'}}  src="https://i.ibb.co/1s4tL6G/three.png" alt="" />
                    </div>

                    <div className="col-md-4 mb-3" style={{border: '1px solid gray', padding: '20px', backgroundColor: '#eee', borderRadius:'20px'}}>
                        <img style={{width:'100%'}}  src="https://i.ibb.co/ypV6cQ1/four.png" alt="" />
                    </div>
                    <div className="col-md-4 mb-3" style={{border: '1px solid gray', padding: '20px', backgroundColor: '#eee', borderRadius:'20px'}}>
                        <img style={{width:'100%'}}  src="https://i.ibb.co/Z6fby02/five.png" alt="" />
                    </div>
                    <div className="col-md-4 mb-3" style={{border: '1px solid gray', padding: '20px', backgroundColor: '#eee', borderRadius:'20px'}}>
                        <img style={{width:'100%'}}  src="https://i.ibb.co/DrCZbG2/six.png" alt="" />
                    </div>
                    <div className="col-md-4 mb-3" style={{border: '1px solid gray', padding: '20px', backgroundColor: '#eee', borderRadius:'20px'}}>
                        <img style={{width:'100%'}}  src="https://i.ibb.co/pnDdWpR/seven.png" alt="" />
                    </div>
                    <div className="col-md-4 mb-3" style={{border: '1px solid gray', padding: '20px', backgroundColor: '#eee', borderRadius:'20px'}}>
                        <img style={{width:'100%'}}  src="https://i.ibb.co/wdrSxcs/eight.png" alt="" />
                    </div>
                    <div className="col-md-4 mb-3" style={{border: '1px solid gray', padding: '20px', backgroundColor: '#eee', borderRadius:'20px'}}>
                        <img style={{width:'100%'}}  src="https://i.ibb.co/bPykGQM/nine.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Travel;