import * as React from 'react';
import { Fragment } from 'react';
import { IMenuItem } from '../models/menuItem';
import { Menu } from 'semantic-ui-react';

export interface INavBarProps {
  userMenuItems: IMenuItem[];
}

export default class NavBar extends React.Component<INavBarProps> {

  public render() {
    const { userMenuItems } = this.props;
    return (
      <Fragment>
        <Menu items={userMenuItems} />
      </Fragment>
    );
  }
  
}
