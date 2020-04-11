import React from 'react';
import '../styles/App.css';
import { Fragment } from 'react'
import { IUserLogin } from '../models/userLogins'

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



public render() {
  return (
    <Fragment>
      <h1>Hello, world!</h1>
    </Fragment>
  );
}

}

// export default App;
