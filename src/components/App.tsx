import React from 'react';
import { Fragment } from 'react'
import '../styles/App.css';
import { IUserLogin } from '../models/userLogin'
import { IMenuItem } from '../models/menuItem';
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
  menuItems: IMenuItem[][];
}

export default class App extends React.Component<IAppProps, IState> {
  constructor(props: IAppProps) {
    super(props);
    
    this.state = {
      userLogins: [
        {
          username: 'user1',
          password: 'pass1'
        },
        {
          username: 'user2',
          password: 'pass2'
        },
        {
          username: 'user3',
          password: 'pass3'
        }
      ],
      loginFormIsOpen: false,
      loggedIn: false,
      // userNum is set to -1 when nobody is logged in.
      userNum: -1,
      showingFailedLogin: false,
      menuItems: [
        [{key:'1',name:'Home'},{key:'2',name:"Alice's Page"},{key:'3',name:'Introduction to JavaScript'},{key:'4',name:"Beginner's ChartJS"}],
        [{key:'1',name:'Home'},{key:'2',name:"Bob's Page"},{key:'3',name:'Advanced C#'},{key:'4',name:"In-Depth .NET"}],
        [{key:'1',name:'Home'},{key:'2',name:"Charlie's Page"},{key:'3',name:'TypeScript Reference'},{key:'4',name:"React Reference"}]
      ]
    }

  }

  public onClickLogInButton = () => {
    // Test for any modal forms open to prevent button operation.
    if ( !(this.state.loginFormIsOpen || this.state.showingFailedLogin) ) {
      this.setState(
        { loginFormIsOpen: true, }
      );
    }
  }
  
  public onClickLogOutButton = () => {
    this.setState(
      { 
        loggedIn: false,
        userNum: -1
      }
    );
  }

  // Submit from Login Form.
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

  // Okay from login fail alert form.
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
    let { loginFormIsOpen, loggedIn, userNum, showingFailedLogin, menuItems } = this.state;
    let userMenuItems: IMenuItem[];
    if ( userNum >= 0 ) {
      userMenuItems = menuItems[userNum];
    } else {
      userMenuItems = [{key:'1',name:'Home'}];
    }
    return (
      <Fragment>
        <NavBar
          userMenuItems={userMenuItems} />
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

