import React from "react";
import {Header} from './Header';
import {Banner} from './Banner';
import { Route, Link } from "react-router-dom";
import {closeModal} from '../actions/modal_actions';
import {AuthRoute} from '../util/route_util';
import Modal from './modal/modal'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { CSSTransition } from 'react-transition-group';
import RestaurantIndexContainer from './restaurant/restaurant_index_container';
import RestaurantShowContainer from './restaurant/restaurant_show/restaurant_show_container'
// import RestaurantIndexContainer from './restaurant/restaurant_index_container';
const App = (props) => {
debugger;
    library.add(fas)
    
 return (
    <>
        
        <Modal />
        <Header />
        <Route exact path="/" component={Banner} />
        <Route exact path="/" component={RestaurantIndexContainer} />
        {/* <AuthRoute path="/login" component={LoginFormContainer} />
        <AuthRoute path="/signup" component={SignupFormContainer} /> */}
        <Route path="/restaurants/:restaurantId" component={RestaurantShowContainer}></Route>
    </>
);
    }
export default App;