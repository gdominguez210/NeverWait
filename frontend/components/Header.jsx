import React from "react";
import GreetingContainer from './greeting/greeting_container';

export const Header = () => (
    <>
        <header>
            <div className="logo-container">
                <div className="logo">
                    <i className="fas fa-coffee"></i>
                </div>
                <div className="logo-content">
                <h1>NeverWait</h1>
                <p>the <strong>OpenTable</strong> clone</p>
                </div>
            </div>
            <GreetingContainer />
        </header>
    </>
)