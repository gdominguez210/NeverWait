import { connect } from 'react-redux';
import { signup } from '../../actions/session_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import React from 'react';
import SessionForm from './SessionForm';

const msp = state => ({
    errors: state.errors.session,
    formType: 'Signup'
})


const mdp = dispatch => ({
    processForm: (user) => dispatch(signup(user)),
    demo: (user) => dispatch(login(user)),
    otherForm: (
        <button className="highlight" onClick={()=>dispatch(openModal('login'))}>Login</button>
    ),
    closeModal: ()=>dispatch(closeModal())
})

export default connect(msp, mdp)(SessionForm);