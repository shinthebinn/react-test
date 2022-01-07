import React from 'react';
import './App.css';
import MomJoke from './MomJoke';
import Form from './Form';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "mother"
    }
  }

  /*(componentDidMount() {
  
  }

  componentWillUnmount() {
    
  }*/

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
}

export default App;
