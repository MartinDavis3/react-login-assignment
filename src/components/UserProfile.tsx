import * as React from 'react';
import { IUserProfile } from '../models/userProfile'

export interface IUserProfileProps {
  userNum: number;
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
          name: 'Bob',
          level: 'Begginer',
          favLang: 'JavaScript',
          favFramework: 'ChartJS'
        }
      ]
    }
  }

  public render() {
    const { userProfiles } = this.state;
    const { username, name, level, favLang, favFramework } = userProfiles[this.props.userNum];
    return (
      <div>
        <p>Username: {username}</p>
        <p>Name: {name}</p>
        <p>Level: {level}</p>
        <p>Favourite Language: {favLang}</p>
        <p>Favourite Framework: {favFramework}</p>
      </div>
    );
  }
}
