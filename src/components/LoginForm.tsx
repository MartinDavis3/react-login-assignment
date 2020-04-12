import * as React from 'react';
import { Fragment } from 'react';
import { Input, Button } from 'semantic-ui-react';

export interface ILoginFormProps {
  onClickSubmitButton: (currUserInp: string, currPassInp: string) => void;
}

interface IState {
  currUser: string;
  currPass: string;
}

export default class LoginForm extends React.Component<ILoginFormProps, IState> {
  constructor(props: ILoginFormProps) {
    super(props);
    this.state = {
      currUser: '',
      currPass: ''
    }
  }

  private onUserFieldChange = (event: React.FormEvent<HTMLInputElement>) => {
    this.setState( { currUser: event.currentTarget.value} )
  }

  private onPassFieldChange = (event: React.FormEvent<HTMLInputElement>) => {
    this.setState( { currPass: event.currentTarget.value} )
  }

  public render() {
    const { onClickSubmitButton } = this.props;
    const { currUser, currPass } = this.state;
    return (
      <Fragment>
        <h1>Log In</h1>
        <Input placeholder = 'Username...' onChange={this.onUserFieldChange} />
        <Input placeholder = 'Password...' onChange={this.onPassFieldChange} />
        <Button content = 'Submit' onClick={() => onClickSubmitButton(currUser,currPass)} />      
      </Fragment>
    );
  }
}
