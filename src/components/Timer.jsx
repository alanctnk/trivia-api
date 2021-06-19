import React, { Component } from 'react';
import './Timer.css';
import PropTypes from 'prop-types';

class Timer extends Component {
  componentDidMount() {
    const { setTimer } = this.props;
    setTimer();
  }

  render() {
    const { timer } = this.props;
    return (
      <div>
        Time:
        {' '}
        <span className="timer">

          { timer }
        </span>
      </div>
    );
  }
}

Timer.propTypes = PropTypes.shape({
  setTimer: PropTypes.func,
  timer: PropTypes.string,
}).isRequired;
export default Timer;
