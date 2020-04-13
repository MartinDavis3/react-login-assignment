import React from 'react';
import { Fragment } from 'react';
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
                <div>
                    <LoginForm onClickSubmitButton={onClickSubmitButton} />
                </div>
                :
                <div>
                </div>
            }
        </Fragment>
        )
    }
    
}
