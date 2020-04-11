import React from 'react';
import '../styles/App.css';
import { Fragment } from 'react'
import { IUserLogin } from '../models/userLogins'
import LogInOutButton from './LogInOutButton';

export interface IAppProps {
}

export interface IState {
  userLogins: IUserLogin[];
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
      loggedIn: false,
      currUser: 'default'
    }
  }

  public onClickLogInButton = () => {
    this.setState( { loggedIn: true } )
  }
  
  public onClickLogOutButton = () => {
    this.setState( { loggedIn: false} )
  }

public render() {
  let { userLogins, loggedIn, currUser } = this.state;
  return (
    <Fragment>
      <h1>Hello, world!</h1>
      <LogInOutButton
        loggedIn={loggedIn}
        callbackLogIn={this.onClickLogInButton}
        callbackLogOut={this.onClickLogOutButton} />
    </Fragment>
  );
}

}

// export default App;
