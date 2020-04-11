import React from 'react';
import '../styles/App.css';
import { Fragment } from 'react'
import { IUserLogin } from '../models/userLogins'
import LogInOutButton from './LogInOutButton';
import LoginModal from './LoginModal';

export interface IAppProps {
}

export interface IState {
  userLogins: IUserLogin[];
  loginFormIsOpen: boolean;
  loggedIn: boolean;
  currUser: string;
}

export default class App extends React.Component<IAppProps, IState> {
  constructor(props: IAppProps) {
    super(props);
    
    this.state = {
      userLogins: [
        {
          username: 'user1',
          password: 'pass1'
        }
      ],
      loginFormIsOpen: false,
      loggedIn: false,
      currUser: 'default'
    }
  }

  public onClickLogInButton = () => {
    this.setState( {loginFormIsOpen: true})
    // this.setState( { loggedIn: true } )
  }
  
  public onClickLogOutButton = () => {
    this.setState( { loggedIn: false} )
  }

  public onClickLoginFormClose = () => {
    this.setState( {loginFormIsOpen: false} )
  }

public render() {
  let { userLogins, loginFormIsOpen, loggedIn, currUser } = this.state;
  return (
    <Fragment>
      <h1>Hello, world!</h1>
      <LogInOutButton
        loggedIn={loggedIn}
        callbackLogIn={this.onClickLogInButton}
        callbackLogOut={this.onClickLogOutButton} />
      <LoginModal
        loginFormIsOpen={loginFormIsOpen}
        callbackClose={this.onClickLoginFormClose} />
    </Fragment>
  );
}

}

// export default App;
