import React from 'react';
import { Fragment } from 'react';
// import { Button } from 'semantic-ui-react';
import '../styles/LoginModal.css'
// import LogInOutButton from './LogInOutButton';
import LoginForm from './LoginForm';

export interface ILoginModal {
    loginFormIsOpen: boolean;
    onClickSubmitButton: (currUserInp: string, currPassInp: string) => void;
}

export default class LoginModal extends React.Component<ILoginModal> {


    public render () {
        const { loginFormIsOpen, onClickSubmitButton } = this.props;
        return(
        <Fragment>
            {loginFormIsOpen ?
                <div className = "modal-show">
                    <LoginForm onClickSubmitButton={onClickSubmitButton} />
                    {/* <h1>Login Form</h1> */}
                    {/* <Button content = 'Close' onClick = {callbackClose} /> */}
                </div>
                :
                <div className = "modal-hide">
                    <LoginForm onClickSubmitButton={onClickSubmitButton} />
                    {/* <h1>Login Form</h1> */}
                    {/* <Button content = 'Close' onClick = {callbackClose} /> */}
                </div>
            }
        </Fragment>
        )
    }

}
