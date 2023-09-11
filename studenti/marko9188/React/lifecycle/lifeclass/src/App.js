import React from 'react';

import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state= {
      repos: []
    };
  }

  UNSAFE_componentWillMount(){
    console.log('Component wll mount!');
  }

  componentDidMount(){
    console.log('Component did mount!');
    this.getList();
  }

  getList = () => {
    fetch('https://api.github.com/users/facebook/repos')
    .then(response => response.json())
    .then(data => {this.setState({repos: data});
    console.log(data);
    });
    
  }

  shouldComponentUpdate(nextProps, nextState) {
    return true;
    // return this.state.repos !== nextState.repos;
  }

  UNSAFE_componentWillUpdate(nextProps, nextState) {
    console.log('Component will update!');
  }

  componentDidUpdate(){
    console.log('Component did update!');
  }



  render () {

    const {repos} = this.state;

    return (
      <div className="App">
        <h3>Hello mounting lifecycle methods!</h3>
        {repos.map((repo,index) => (
            <div key={repos.id}>{index}: <strong>{repo.name}</strong></div>
        ))}
      </div>
    );
  };
}

export default App;
