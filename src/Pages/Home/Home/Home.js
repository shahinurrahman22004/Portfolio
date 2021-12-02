import React from 'react';
import './Home.css';

const Home = () => {
    return (
        <div id="home" className="container mt-5 mb-5">
            <div className="row">
                <div className="col-md-6 mb-3">
                    <h1 style={{fontWeight: '700'}}>Hello, I am Shahinur Rahman</h1>
                    <p>Junior Web Developer || React developer || BackEnd developer || <br /> FontEnd Developer</p>
                    <div>
                        <ul style={{textAlign: 'left'}}>
                            <li style={{float: 'left'}}>AGE:</li>
                            <li style={{listStyle: 'none', textAlign: 'center'}}>17</li>
                        </ul>
                        <ul>
                        <li style={{float: 'left'}}>PHONE:</li>
                            <li style={{listStyle: 'none'}}>01310365997</li>
                        </ul>
                        <ul>
                        <li style={{float: 'left'}}>EMAIL:</li>
                            <li style={{listStyle: 'none'}}><a style={{textDecoration: 'none', color: 'black'}} href="mailto:shahinur02345@gmail.com">shahinur02345@gmail.com</a></li>
                        </ul>
                        <ul>
                        <li style={{float: 'left'}}>ADDRESS:</li>
                            <li style={{listStyle: 'none'}}>Dhaka, Khulna, Meherpur.</li>
                        </ul>
                    </div>
                    <div>
                        <a target="_blank" style={{padding: '20px'}} href="https://github.com/shahinurrahman22004"><i class="fab fa-github"></i></a>

                        <a style={{padding: '20px'}} target="_blank" href="https://www.linkedin.com/in/shahinur-rahman-ab7a44216/"><i class="fab fa-linkedin-in"></i></a>
                        <a style={{padding: '20px'}} target="_blank" href="https://www.facebook.com/profile.php?id=100025560911375"><i class="fab fa-facebook"></i></a>
                    </div>
                </div>
                <div className="col-md-6">
                    <img style={{width: '100%'}} src="https://i.ibb.co/1JyFmRd/Developer-working-on-code-late-at-night-view-from-the-back.jpg" alt="" />
                </div>
            </div>
            
        </div>
    );
};

export default Home;