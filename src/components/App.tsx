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
  currPass: string;
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
      currUser: 'default',
      currPass: 'default'
    }
  }

  public onClickLogInButton = () => {
    this.setState( { loginFormIsOpen: true } );
    // this.setState( { loggedIn: true } )
  }
  
  public onClickLogOutButton = () => {
    this.setState( { loggedIn: false} );
  }

  public onClickSubmitButton = (currUserInp: string, currPassInp: string) => {
    this.setState( { loginFormIsOpen: false } );
    if (this.isValidUser( currUserInp, currPassInp ) ) {
      this.setState( {
        loggedIn: true,
        currUser: currUserInp,
        currPass: currPassInp
      } );
    }
  }

  private isValidUser = (currUserInp:string, currPassInp: string): boolean => {
    let {userLogins} = this.state
    var matchFound = false
    for ( let i = 0; i < userLogins.length; i++ ) {
      if ( currUserInp === userLogins[i].username && currPassInp === userLogins[i].password ) {
        matchFound = true;
      }
    }
    return matchFound;
  }

public render() {
  let { loginFormIsOpen, loggedIn } = this.state;
  return (
    <Fragment>
      <h1>Hello, world!</h1>
      <LogInOutButton
        loggedIn={loggedIn}
        callbackLogIn={this.onClickLogInButton}
        callbackLogOut={this.onClickLogOutButton} />
      <LoginModal
        loginFormIsOpen={loginFormIsOpen}
        onClickSubmitButton={this.onClickSubmitButton} />
    </Fragment>
  );
}

}

// export default App;
