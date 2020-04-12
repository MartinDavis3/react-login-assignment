import * as React from 'react';
import { Fragment } from 'react';
import { IMenuItem } from '../models/menuItem';
import { Menu } from 'semantic-ui-react';

export interface INavBarProps {
  userNum: number;
}

interface INavBarState {
  menuItems: IMenuItem[];
}

export default class NavBar extends React.Component<INavBarProps, INavBarState> {

  constructor(props: INavBarProps) {
    super(props);

    this.state = {
      menuItems: [
        {
          key: 'home',
          name: 'Home'
        },
        {
          key: 'profile',
          name: 'Profile Page' 
        },
        {
          key: 'langRef',
          name: 'Language Reference'
        },
        {
          key: 'frameworkRef',
          name: 'Framework Reference'
        }
      ]
    }
  }

  public render() {
    const { menuItems } = this.state;
    return (
      <Fragment>
        <Menu items={menuItems} />
      </Fragment>
    );
  }
}
