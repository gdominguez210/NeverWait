import React from 'react';
import ReactDOM from 'react-dom';
import * as APIUtils from './util/session_api_util';
import {signup, login} from './actions/session_actions';
import configureStore from './store/store';
import Root from './components/root';
import * as RestActions from './actions/restaurants_actions';
document.addEventListener("DOMContentLoaded", ()=>{
    let store;

    if(window.currentUser){
        const preloadedState = {
            entities: {
                users: {[window.currentUser.id]: window.currentUser}
            },
            session: {id: window.currentUser.id}
        }
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    }

    window.login = login;
    window.logout = APIUtils.logout;
    window.signup = signup;
    window.getState = store.getState;
    window.dispatch = store.dispatch;
    window.fetchRestaurants = RestActions.fetchRestaurants;
    window.fetchRestaurant = RestActions.fetchRestaurant;
    const root = document.getElementById("root");
    ReactDOM.render(<Root store={store}/>, root)
});