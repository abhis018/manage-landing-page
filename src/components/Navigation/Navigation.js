import React from 'react';
import './Navigation.css';
import pic from './logo.svg';
import img1 from './illustration-intro.svg';
import dp1 from './avatar1.png';
import dp2 from './avatar2.png';
import dp3 from './avatar3.png';
import dp4 from './avatar4.png';


const Navigation = () => {
    return (
        <div>
            <div className="head">
                <img className="p1" src={pic}/>
                <ul className="ul">
                    <li className="li">Pricing</li>
                    <li className="li">Product</li>
                    <li className="li">About us</li>
                    <li className="li">Careers</li>
                    <li className="li">Community</li>
                </ul>
                <button className="b1">Get Started</button>
            </div>
            <div className="head1">
                <div className="text">
                    <h1 className="h1">Bring everyone together to build better products.</h1>
                    <h5 className="h4">Manage makes it simple for software teams to plan day-to-day 
                        tasks while keeping the larger team goals in view.
                    </h5>
                    <button className="b2">Get Started</button>
                </div>
                <img className="p2" src={img1}/>
            </div>
            <div className="head2">
                <div className="box1">
                    <h1>What's different about Manage?</h1>
                    <h5 className="box-lower">
                        Manage provides all the functionality your team needs, without 
                        the complexity. Our software is tailor-made for modern digital 
                        product teams.
                    </h5>
                </div>
                <div className="box2">
                    <div>
                        <div className="line">
                            <button className="but">01</button>
                            <h5 className="upper-head">Track company-wide progress</h5>
                        </div>
                        <h5 className="lower-head">See how your day-to-day tasks fit into the wider vision. Go from 
                            tracking progress at the milestone level all the way done to the 
                            smallest of details. Never lose sight of the bigger picture again.
                        </h5>
                    </div>
                    <div>
                        <div className="line">
                            <button className="but">02</button>
                            <h5 className="upper-head">Advanced built-in reports</h5>
                        </div>
                        <h5 className="lower-head">Set internal delivery estimates and track progress toward company 
                            goals. Our customisable dashboard helps you build out the reports 
                            you need to keep key stakeholders informed.
                        </h5>
                    </div>
                    <div>
                        <div className="line">
                            <button className="but">03</button>
                            <h5 className="upper-head">Everything you need in one place</h5>
                        </div>
                        <h5 className="lower-head">Stop jumping from one service to another to communicate, store files, 
                            track tasks and share documents. Manage offers an all-in-one team 
                            productivity solution.
                        </h5>
                    </div>
                </div>
            </div>
            <div>
                <h1 className="head-3">What they’ve said</h1>
                <div className="head3">
                    <div className="box">
                        <img className="dp" src={dp1}/>
                        <h5>Anisha Li</h5>
                        <h5>
                            “Manage has supercharged our team’s workflow. The ability to maintain 
                            visibility on larger milestones at all times keeps everyone motivated.”
                        </h5>
                    </div>
                    <div className="box">
                        <img className="dp" src={dp2}/>
                        <h5>Ali Bravo</h5>
                        <h5>“We have been able to cancel so many other subscriptions since using 
                            Manage. There is no more cross-channel confusion and everyone is much 
                            more focused.”
                        </h5>
                    </div>
                    <div className="box">
                        <img className="dp" src={dp3}/>
                        <h5>Richard Watts</h5>
                        <h5>
                            “Manage allows us to provide structure and process. It keeps us organized 
                            and focused. I can’t stop recommending them to everyone I talk to!”
                        </h5>
                    </div>
                    <div className="box">
                        <img className="dp" src={dp4}/>
                        <h5>Shanai Gough</h5>
                        <h5>
                            “Their software allows us to track, manage and collaborate on our projects 
                            from anywhere. It keeps the whole team in-sync without being intrusive.”
                        </h5>
                    </div>
                </div>
                <button className="b3">Get Started</button>
            </div>
            <div className="head4">
                <h1 className="foot">Simplify how your team<br/> works today.</h1>
                <button className="b4">Get Started</button>
            </div>
        </div> 
    )
}

export default Navigation;