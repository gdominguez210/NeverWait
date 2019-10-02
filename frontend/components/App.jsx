import React from "react";
import {Header} from './Header';
import {Banner} from './Banner';
import { Route, Link } from "react-router-dom";
import {closeModal} from '../actions/modal_actions';
import {AuthRoute} from '../util/route_util';
import Modal from './modal/modal'

const App = () => (
    <>
        <Modal />
        <Header />
        <Banner />
        {/* <AuthRoute path="/login" component={LoginFormContainer} />
        <AuthRoute path="/signup" component={SignupFormContainer} /> */}
    </>
)

export default App;