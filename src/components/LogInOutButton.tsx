import * as React from 'react';
import { Fragment } from 'react';
import { Button } from 'semantic-ui-react';

export interface ILogInOutButton {
  callbackLogIn: () => void;
  callbackLogOut: () => void;
  loggedIn: boolean;
}

export default class LogInOutButton extends React.Component<ILogInOutButton> {

  public render() {
    const { loggedIn, callbackLogIn, callbackLogOut} = this.props;
    return (
      <Fragment>
        {loggedIn ?
          <Button content = 'Log Out' onClick = {callbackLogOut} />
          :
          <Button content = 'Log In' onClick = {callbackLogIn} />
        }
      </Fragment>
    )
  }
  
}