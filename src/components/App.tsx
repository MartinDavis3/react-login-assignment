import React from 'react';
import '../styles/App.css';
import { Fragment } from 'react'
import { IUserLogin } from '../models/userLogins'
import LogInOutButton from './LogInOutButton';
import LoginModal from './LoginModal';
import UserProfile from './UserProfile';

export interface IAppProps {
}

export interface IState {
  userLogins: IUserLogin[];
  loginFormIsOpen: boolean;
  loggedIn: boolean;
  userNum: number;
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
        userNum: foundUser
      } );
    }
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
  let { loginFormIsOpen, loggedIn, userNum } = this.state;
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
