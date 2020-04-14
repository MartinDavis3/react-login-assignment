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
        if ( showingFailedLogin ) {
            return(
            <Fragment>
                <h2>Username and/or Password did not match a Valid User.</h2>
                <Button content='OK' onClick={() => onClickOkButton()} />
            </Fragment>
            );
        } else {
            return( null );
        }
    }
    
}
