import React from 'react';
import '../styles/App.css';
import { Fragment } from 'react'
import { IUserLogin } from '../models/userLogins'
import LogInOutButton from './LogInOutButton';
import LoginModal from './LoginModal';
import UserProfile from './UserProfile';
import AlertMessage from './AlertMessage';
import NavBar from './NavBar';

export interface IAppProps {
}

export interface IState {
  userLogins: IUserLogin[];
  loginFormIsOpen: boolean;
  loggedIn: boolean;
  userNum: number;
  showingFailedLogin: boolean;
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
      userNum: -1,
      showingFailedLogin: false
    }
  }

  public onClickLogInButton = () => {
    this.setState( { loginFormIsOpen: true } );
  }
  
  public onClickLogOutButton = () => {
    this.setState( { loggedIn: false} );
  }

  public onClickSubmitButton = (currUserInp: string, currPassInp: string) => {
    this.setState( { loginFormIsOpen: false } );
    let foundUser =this.isValidUser( currUserInp, currPassInp);
    if ( foundUser >= 0  ) {
      this.setState( {
        loggedIn: true,
        userNum: foundUser })
    } else {
      this.setState( {showingFailedLogin: true} );
    }
  }

  public onClickOkButton = () => {
    this.setState( {showingFailedLogin: false} );
  }

  private isValidUser = (currUserInp:string, currPassInp: string): number => {
    let {userLogins} = this.state;
    var match = -1;
    for ( let i = 0; i < userLogins.length; i++ ) {
      if ( currUserInp === userLogins[i].username && currPassInp === userLogins[i].password ) {
        match = i;
      }
    }
    return match;
  }

public render() {
  let { loginFormIsOpen, loggedIn, userNum, showingFailedLogin } = this.state;
  return (
    <Fragment>
      <NavBar
        userNum={userNum} />
      <LogInOutButton
        loggedIn={loggedIn}
        callbackLogIn={this.onClickLogInButton}
        callbackLogOut={this.onClickLogOutButton} />
      <LoginModal
        loginFormIsOpen={loginFormIsOpen}
        onClickSubmitButton={this.onClickSubmitButton} />
      <AlertMessage
          showingFailedLogin={showingFailedLogin}
          onClickOkButton={this.onClickOkButton} />
      { loggedIn ?
        <UserProfile
          userNum={userNum} />
        :
        <div>
        </div>
      }
    </Fragment>
  );
}

}
