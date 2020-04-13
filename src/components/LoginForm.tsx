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
    //Process input to hide password.
    let passInp = event.currentTarget.value;
    let newCurrPass = this.state.currPass;
    if ( passInp.length > newCurrPass.length ) {
      event.currentTarget.value = passInp.slice(0,passInp.length-1) + String.fromCharCode(8226)
      newCurrPass += passInp.slice(-1);
    } else {
      newCurrPass = newCurrPass.slice(0,newCurrPass.length-1);
    }
    this.setState( { currPass: newCurrPass} )
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
