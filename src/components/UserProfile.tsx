import * as React from 'react';
import { Fragment } from 'react';
import { IUserProfile } from '../models/userProfile';


export interface IUserProfileProps {
  userNum: number;
  loggedIn: boolean;
}

interface IUserProfileState {
  userProfiles: IUserProfile[];
}

export default class UserProfile extends React.Component<IUserProfileProps, IUserProfileState> {

  constructor(props: IUserProfileProps) {
    super(props);

    this.state = {
      userProfiles: [
        {
          username: 'user1',
          name: 'Alice',
          level: 'Begginer',
          favLang: 'JavaScript',
          favFramework: 'ChartJS'
        },
        {
          username: 'user2',
          name: 'Bob',
          level: 'Intermediate',
          favLang: 'C#',
          favFramework: '.NET'
        },
        {
          username: 'user3',
          name: 'Charlie',
          level: 'Advanced',
          favLang: 'TypeScript',
          favFramework: 'React'
        }
      ]
    }
    
  }

  public render() {
    const { userProfiles } = this.state;
    const { userNum, loggedIn } = this.props;
    if ( loggedIn ) {
      // Note userProfiles deconstruction has to be inside "if block" because it will
      // fail if userNum is -1 (nobody logged in).
      const { username, name, level, favLang, favFramework } = userProfiles[userNum];
      return (
        <Fragment>
          <p></p>
          <p>Username: {username}</p>
          <p>Name: {name}</p>
          <p>Level: {level}</p>
          <p>Favourite Language: {favLang}</p>
          <p>Favourite Framework: {favFramework}</p>
        </Fragment>
      );
    } else {
      return( null );
    }
  }

}
