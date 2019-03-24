import React, { KeyboardEvent } from 'react';
import ReactDOM from 'react-dom';
import domtoimage from 'dom-to-image';
import './index.css';

interface IState {
  name: string
  email: string
  address: string
  phone: string
  [field: string]: string
}

interface IProps {

}

class App extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props)

    this.state = {
      name: '',
      email: '',
      address: '',
      phone: ''
    }
  }

  onChange = (field: string, value: string) => {
    this.setState({
      [field]: value,
    })
  }

  render() {
    const {
      name,
      email,
      address,
      phone,
    } = this.state

    return (
      <div className="App">
        <div className="show">
          {name}
          {email}
          {address}
          {phone}
        </div>

        <div className="field">
          <input value={name} onChange={(e: React.ChangeEvent<HTMLInputElement>) => {

            console.log(e.target.value)
            this.onChange('name', e.target.value)
          }} />
          
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
