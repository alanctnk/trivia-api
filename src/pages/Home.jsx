import React, { Component } from 'react';
import Login from '../components/Login';

class Home extends Component {
  render() {
    return (
      <div className="homeLogin">
        <img src="https://upload.wikimedia.org/wikipedia/en/2/27/Trivia.png" width="400" alt="trivia logo" />
        <Login />
      </div>
    );
  }
}

export default Home;
