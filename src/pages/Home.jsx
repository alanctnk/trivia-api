import React, { Component } from 'react';
import quizLogo from '../trivia.png';
import Login from '../components/Login';

class Home extends Component {
  render() {
    return (
      <div className="homeLogin">
        <img src={ quizLogo } width="400" alt="trivia logo" />
        <Login />
      </div>
    );
  }
}

export default Home;
