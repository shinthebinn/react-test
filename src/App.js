import React from 'react';
import { useState } from 'react';
import './App.css';
import MomJoke from './MomJoke';
import Form from './Form';
// method with classes. Lots more boilerplate and gross stuff
/* class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "mother"
    }
  }

  changeName(name) {
    this.setState({
      name: name
    })
  }

  render() {
    return (
      <div>
        <MomJoke name={this.state.name} />
        <Form placeholder="name" submitFunc={this.changeName.bind(this)} />
      </div>
    )
  }
} */
// method with functions and hooks. wayyy cleaner
function App() {
  const [name, setName] = useState("mother");

  return (
    <div>
      <MomJoke name={name} />
      <Form placeholder="name" submitFunc={name => setName(name)} />
    </div>
  );
}

export default App;
