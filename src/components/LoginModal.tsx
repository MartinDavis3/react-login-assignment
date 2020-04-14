import React from 'react';
import { Fragment } from 'react';
import LoginForm from './LoginForm';

// This is not truly modal, it is just displayed as required from the
// loginFormIsOpen state from App. App then controls functioning of the
// login/logout button to make sure it does not operate if this form is open.

export interface ILoginModal {
    loginFormIsOpen: boolean;
    onClickSubmitButton: (currUserInp: string, currPassInp: string) => void;
}

export default class LoginModal extends React.Component<ILoginModal> {

    public render () {
        const { loginFormIsOpen, onClickSubmitButton } = this.props;
        if ( loginFormIsOpen ) {
            return(
            <Fragment>
                <LoginForm onClickSubmitButton={onClickSubmitButton} />
            </Fragment>
            );
        } else {
            return( null );
        }
    }
    
}
