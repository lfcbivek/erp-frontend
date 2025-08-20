import React from 'react';
import NavBar from './Navbar';
import SignUpForm from './SignUpForm';

import './GetStarted.scss';
const GetStarted = () => {
    console.log("here get started")
    return(
        <div>
            {/* <NavBar /> */}
            <div className="GetStarted">
                <h1 id='tagline'>Get started with smarter workflows today</h1>
                <SignUpForm />
            </div>
        </div>
    );
}

export default GetStarted;