import React from 'react';
import './Navigation.css';
import pic from './logo.svg';
import img1 from './illustration-intro.svg';

const Navigation = () => {
    return (
        <div>
            <div className="head">
                <img className="p1" src={pic}/>
                <ul>
                    <li>Pricing</li>
                    <li>Product</li>
                    <li>About us</li>
                    <li>Careers</li>
                    <li>Community</li>
                </ul>
                <button className="b1">Get Started</button>
            </div>
            <div className="head1">
                <div className="text">
                    <h1 className="h1">Bring everyone together to build better products.</h1>
                    <h4 className="h4">Manage makes it simple for software teams to plan day-to-day 
                        tasks while keeping the larger team goals in view.
                    </h4>
                    <button className="b2">Get Started</button>
                </div>
                <img className="p2" src={img1}/>
            </div>
            <div>
                <div></div>
                <div></div>
            </div>
        </div> 
    )
}

export default Navigation;