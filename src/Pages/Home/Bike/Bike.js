import React from 'react';
import { Nav } from 'react-bootstrap';
import './Bike.css';

const Bike = () => {
    return (
        <div className="bike">
            <h1 style={{fontWeight: '700', margin: '20px 0'}}>Go Bike</h1>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 pb-3">
                        <h3 style={{textAlign: 'left', color: 'blue', marginLeft: '10px'}}>Abour Go Bike</h3>
                        <ul style={{float: 'left', textAlign:  'left'}}>
                            <li>I have used React to develop this website.</li>

                            <li>This is a Bike Buy Website.</li>

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

                            <li>Easly Buy Product.</li>

                            <li>OnClick Login.</li>

                            <li>Easly manage Your Orders.</li>

                            <li>Easy to add new Review.</li>
                        </ul>
                    </div>
                </div>

                <div style={{display: 'flex', margin: '20px 0', justifyContent: 'center', alignItems: 'center'}}>
                    <Nav.Link target="_blank" style={{padding: '10px', backgroundColor: 'blue', color: 'white', textTransform: 'uppercase', borderRadius: '20px', letterSpacing: '1px', fontWeight: '700', padding:'10px 20px'}} href="https://unruffled-hermann-4505de.netlify.app/">See Website</Nav.Link>

                    <Nav.Link target="_blank" style={{padding: '10px', backgroundColor: 'blue', color: 'white', textTransform: 'uppercase', borderRadius: '20px', letterSpacing: '1px', fontWeight: '700', padding: '10px 20px', margin: '0 20px'}} href="https://github.com/shahinurrahman22004/Go-Bike-Website">See Clint site Code</Nav.Link>

                    <Nav.Link target="_blank" style={{padding: '10px', backgroundColor: 'blue', color: 'white', textTransform: 'uppercase', borderRadius: '20px', letterSpacing: '1px', fontWeight: '700', padding: '10px 20px'}} href="https://github.com/shahinurrahman22004/Go-BIke-server-site">See Server site Code</Nav.Link>
                </div>

                <div className="row">
                    <div className="col-md-4 mb-3" style={{border: '1px solid gray', padding: '20px', backgroundColor: '#eee', borderRadius:'20px'}}>
                        <img style={{width:'100%'}} src="https://i.ibb.co/cQd88Fs/one.png" alt="" />
                    </div>
                    <div className="col-md-4 mb-3" style={{border: '1px solid gray', padding: '20px', backgroundColor: '#eee', borderRadius:'20px'}}>
                        <img style={{width:'100%'}}  src="https://i.ibb.co/DgL0JC8/two.png" alt="" />
                    </div>
                    <div className="col-md-4 mb-3" style={{border: '1px solid gray', padding: '20px', backgroundColor: '#eee', borderRadius:'20px'}}>
                        <img style={{width:'100%'}}  src="https://i.ibb.co/9WgBMyk/four.png" alt="" />
                    </div>

                    <div className="col-md-4 mb-3" style={{border: '1px solid gray', padding: '20px', backgroundColor: '#eee', borderRadius:'20px'}}>
                        <img style={{width:'100%'}}  src="https://i.ibb.co/R7B0zsx/three.png" alt="" />
                    </div>
                    <div className="col-md-4 mb-3" style={{border: '1px solid gray', padding: '20px', backgroundColor: '#eee', borderRadius:'20px'}}>
                        <img style={{width:'100%'}}  src="https://i.ibb.co/TgKh2Qt/five.png" alt="" />
                    </div>
                    <div className="col-md-4 mb-3" style={{border: '1px solid gray', padding: '20px', backgroundColor: '#eee', borderRadius:'20px'}}>
                        <img style={{width:'100%'}}  src="https://i.ibb.co/Z61nssQ/six.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Bike;