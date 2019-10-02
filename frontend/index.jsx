import React from 'react';
import ReactDOM from 'react-dom';
import * as APIUtils from './util/session_api_util';
import {signup, login} from './actions/session_actions';
import configureStore from './store/store';
import Root from './components/root';

document.addEventListener("DOMContentLoaded", ()=>{
    window.login = login;
    window.logout = APIUtils.logout;
    window.signup = signup;
    const store = configureStore();
    window.getState = store.getState;
    window.dispatch = store.dispatch;
    const root = document.getElementById("root");
    ReactDOM.render(<Root store={store}/>, root)
});