import React from 'react';
import Message from '../../images/msg.jpg';

const Contact = () => {
    const handleMessage = (e) => {
        e.preventDefault();
    }
    return (
        <div id="contact" className="container mt-5 mb-2">
            <h1 style={{color: 'blue'}}>Contact Me</h1>
            <p style={{color: 'lightblue'}}>Send Your Message.</p>
            <div className="row">
                <div className="col-md-6">
                    <img style={{width: '100%'}} src={Message} alt="" />
                </div>
                <div className="col-md-6">
                    <form onSubmit={handleMessage}>
                        <input style={{width: '90%', padding: '10px 20px', margin: '10px', borderRadius: '10px'}} type="text" name="" placeholder="Your Name" id="" required />
                        <br />
                        <input style={{width: '90%', padding: '10px 20px', margin: '10px', borderRadius: '10px'}} type="password" name="" placeholder="Your Email" id="" required />
                        <br />
                        <input style={{width: '90%', padding: '10px 20px', margin: '10px', borderRadius: '10px'}} type="number" name="" placeholder="Your Number" id="" required />
                        <br />
                        <textarea style={{width: '90%', padding: '10px 20px', borderRadius: '10px'}} name="" id="" cols="30" placeholder="Your Message" rows="10"></textarea>
                        <br />
                        <input style={{padding: '7px 20px', borderRadius: '8px', backgroundColor: 'blue', color: 'white', fontWeight: '700', letterSpacing: '1px'}} type="submit" value="Send" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;