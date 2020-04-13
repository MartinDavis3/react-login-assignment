import React from 'react';
import { Fragment } from 'react';
import { Button } from 'semantic-ui-react';

export interface IAlertMessage {
    showingFailedLogin: boolean;
    onClickOkButton: () => void;
}

export default class AlertMessage extends React.Component<IAlertMessage> {

    public render () {
        const { showingFailedLogin, onClickOkButton } = this.props;
        return(
        <Fragment>
            {showingFailedLogin ?
                <div>
                    <h2>Username and/or Password did not match a Valid User.</h2>
                    <Button content='OK' onClick={() => onClickOkButton()} />
                </div>
                :
                <div>
                </div>
            }
        </Fragment>
        )
    }
    
}
