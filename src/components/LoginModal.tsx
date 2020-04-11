import React from 'react';
import { Fragment } from 'react';
import { Button } from 'semantic-ui-react';
import '../styles/LoginModal.css'
// import LogInOutButton from './LogInOutButton';

export interface ILoginModal {
    loginFormIsOpen: boolean;
    callbackClose: () => void;
}

export default class LoginModal extends React.Component<ILoginModal> {


    public render () {
        const { loginFormIsOpen, callbackClose } = this.props;
        return(
        <Fragment>
            {loginFormIsOpen ?
                <div className = "modal-show">
                    <h1>Login Form</h1>
                    <Button content = 'Close' onClick = {callbackClose} />
                </div>
                :
                <div className = "modal-hide">
                    <h1>Login Form</h1>
                    <Button content = 'Close' onClick = {callbackClose} />
                </div>
            }
        </Fragment>
        )
    }

}
