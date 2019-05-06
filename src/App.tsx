import * as React from 'react';

import './index.css';
import Field from './components/Field';

interface IState {
  name: string;
  email: string;
  address: string;
  phone: string;
  [field: string]: string;
}

interface IProps {}

export default class App extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {
      name: '',
      email: '',
      address: '',
      phone: '',
    };
  }

  onChange = (field: string, value: string) => {
    this.setState({
      [field]: value,
    });
  };

  render() {
    const { name, email, address, phone } = this.state;

    return (
      <div className="App">
        <div className="show">
          asdsdfd
          {name}
          {email}
          {address}
          {phone}
        </div>
        <Field
          key="11"
          value={name}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            this.onChange('name', e.target.value);
          }}
        />
        <Field
          value={email}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            this.onChange('email', e.target.value);
          }}
        />
        sda
        <Field
          value={address}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            this.onChange('address', e.target.value);
          }}
        />
        <Field
          value={phone}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            this.onChange('phone', e.target.value);
          }}
        />
      </div>
    );
  }
}
