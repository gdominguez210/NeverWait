import React from 'react';
import {Link} from 'react-router-dom';
import { openModal } from '../../actions/modal_actions';

const Greeting = (props) => {
    debugger
    const sessionLinks = () => (
        <nav className="login-signup">
            <button onClick={()=> props.openModal('signup')} className="readon">Sign Up</button>
            <button onClick={() => props.openModal('login')} className="readon-blank">Sign In</button>
        </nav>
    );

    const personalGreeting = () => (
        <div className="header-greeting">
            <p className="header-name">Hi, {props.currentUser.username}</p>
            <button className="readon" onClick={props.logout}>Log Out</button>
        </div>
    )

    return props.currentUser ? personalGreeting() : sessionLinks();
    };

    export default Greeting;