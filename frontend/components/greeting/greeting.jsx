import React from 'react';
import {Link} from 'react-router-dom';

const Greeting = ({currentUser, logout}) => {
    const sessionLinks = () => (
        <nav className="login-signup">
            <Link to="/signup" className="readon">Sign Up</Link>
            <Link to="/login" className="readon-blank">Sign In</Link>
        </nav>
    );

    const personalGreeting = () => (
        <div className="header-greeting">
            <p className="header-name">Hi, {currentUser.username}</p>
            <button className="readon" onClick={logout}>Log Out</button>
        </div>
    )

    return currentUser ? personalGreeting() : sessionLinks();
    };

    export default Greeting;