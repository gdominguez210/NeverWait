import React from 'react';
import ReactDOM from 'react-dom';
import * as APIUtils from './util/session_api_util'
document.addEventListener("DOMContentLoaded", ()=>{
    window.login = APIUtils.login;
    window.logout = APIUtils.logout;
    window.signup = APIUtils.signup;
    const root = document.getElementById("root");
    ReactDOM.render(<h1>ClosedTable</h1>, root)
});