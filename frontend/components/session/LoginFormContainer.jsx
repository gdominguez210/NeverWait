import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import SessionForm from './SessionForm';
import React from 'react';
import {openModal, closeModal} from '../../actions/modal_actions';

const msp = state => ({
    errors: state.errors.session,
    formType: 'Login'
})


const mdp = dispatch => ({
    processForm: (user) => dispatch(login(user)),
    demo: (user) => dispatch(login(user)),
    otherForm: (
        <button onClick={() => dispatch(openModal('signup'))}>Sign Up</button>
    ),
    closeModal: () => dispatch(closeModal())
})

export default connect(msp, mdp)(SessionForm);