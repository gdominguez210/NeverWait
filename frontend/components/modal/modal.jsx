import React from 'react';
import {closeModal} from '../../actions/modal_actions';
import {connect} from 'react-redux';
import LoginFormContainer from '../session/LoginFormContainer.jsx'
import SignUpFormContainer from '../session/SignUpFormContainer.jsx'

const Modal = (props) => {
    debugger
    if (!props.modal) {
        return null;
    }

    let component;

    switch(props.modal) {

        case 'login':
            debugger
            component = <LoginFormContainer />;
            break;
        case 'signup':
            debugger
            component = <SignUpFormContainer />;
            break;
        default:
            return null;
    }

    return (
        <div className="modal-background" onClick={props.closeModal}>
            <div className="modal-child" onClick={e => e.stopPropagation()}>
                { component }
            </div>
        </div>
    );
}

const msp = state => ({
        modal: state.ui.modal
    }
);

const mdp = dispatch => ({
    closeModal: () => dispatch(closeModal())
});


export default connect(msp, mdp)(Modal);