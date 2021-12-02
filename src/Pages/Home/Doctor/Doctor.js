import React from 'react';
import { Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Doctor = () => {
    return (
        <div className="bike">
            <h1 style={{fontWeight: '700', margin: '20px 0'}}>Health Care</h1>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 pb-3">
                        <h3 style={{textAlign: 'left', color: 'blue', marginLeft: '10px'}}>Abour Health Care</h3>
                        <ul style={{float: 'left', textAlign:  'left'}}>
                            <li>I have used React to develop this website.</li>

                            <li>This is a Health Care Website.</li>

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

                            <li>OnClick Login.</li>

                            <li>OnClick LogOut.</li>
                        </ul>
                    </div>
                </div>
                <div style={{display: 'flex', margin: '20px 0', justifyContent: 'center', alignItems: 'center'}}>
                    <Nav.Link target="_blank" style={{padding: '10px', backgroundColor: 'blue', color: 'white', textTransform: 'uppercase', borderRadius: '20px', letterSpacing: '1px', fontWeight: '700', margin: '0 20px', padding:'10px 20px'}} href="https://frosty-mcclintock-3ce154.netlify.app/">See Website</Nav.Link>

                    <Nav.Link target="_blank" style={{padding: '10px', backgroundColor: 'blue', color: 'white', textTransform: 'uppercase', borderRadius: '20px', letterSpacing: '1px', fontWeight: '700', padding: '10px 20px'}} href="https://github.com/shahinurrahman22004/Health-Care-Website">See Code</Nav.Link>
                </div>
                <div className="row">
                    <div className="col-md-4 mb-3" style={{border: '1px solid gray', padding: '20px', backgroundColor: '#eee', borderRadius:'20px'}}>
                        <img style={{width:'100%'}} src="https://i.ibb.co/7NH3vkM/dr-one.png" alt="" />
                    </div>
                    <div className="col-md-4 mb-3" style={{border: '1px solid gray', padding: '20px', backgroundColor: '#eee', borderRadius:'20px'}}>
                        <img style={{width:'100%'}}  src="https://i.ibb.co/9bsR3gk/dr-two.png" alt="" />
                    </div>
                    <div className="col-md-4 mb-3" style={{border: '1px solid gray', padding: '20px', backgroundColor: '#eee', borderRadius:'20px'}}>
                        <img style={{width:'100%'}}  src="https://i.ibb.co/SP8KMvV/dr-three.png" alt="" />
                    </div>

                    <div className="col-md-4 mb-3" style={{border: '1px solid gray', padding: '20px', backgroundColor: '#eee', borderRadius:'20px'}}>
                        <img style={{width:'100%'}}  src="https://i.ibb.co/ZLJ6yMs/dr-four.png" alt="" />
                    </div>
                    <div className="col-md-4 mb-3" style={{border: '1px solid gray', padding: '20px', backgroundColor: '#eee', borderRadius:'20px'}}>
                        <img style={{width:'100%'}}  src="https://i.ibb.co/tsWtxM4/dr-five.png" alt="" />
                    </div>
                    <div className="col-md-4 mb-3" style={{border: '1px solid gray', padding: '20px', backgroundColor: '#eee', borderRadius:'20px'}}>
                        <img style={{width:'100%'}}  src="https://i.ibb.co/tL38h8V/dr-six.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Doctor;