import React from 'react';
import { Fragment } from 'react';
import '../styles/LoginModal.css'
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
                </div>
                :
                <div className = "modal-hide">
                    <LoginForm onClickSubmitButton={onClickSubmitButton} />
                </div>
            }
        </Fragment>
        )
    }

}
