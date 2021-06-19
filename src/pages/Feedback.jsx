import React, { Component } from 'react';
import './Feedback.css';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import { actionScore } from '../redux/actions';

class Feedback extends Component {
  componentWillUnmount() {
    const { setScore } = this.props;
    setScore(0);
  }

  feedBack(assertions) {
    const NUMBER_THREE = 3;
    switch (true) {
    case (assertions < NUMBER_THREE):
      return <h1 data-testid="feedback-text">Could be better...</h1>;
    case (assertions >= NUMBER_THREE):
      return <h1 data-testid="feedback-text">Well played!</h1>;
    default:
      return <h2>Error</h2>;
    }
  }

  render() {
    const { score, assertions } = this.props;
    return (
      <>
        <Header />
        <section className="feedback">
          <div className="message">
            { this.feedBack(assertions) }

            <h5 data-testid="feedback-total-question">
              <strong>
                Assertions:
              </strong>
              {' '}
              <span>

                {assertions}
              </span>
            </h5>
            <h5 data-testid="feedback-total-score">
              <strong>
                Total score:
              </strong>
              {' '}
              <span>
                {score}
              </span>
            </h5>
          </div>
        </section>
        <div className="buttons">

          <Link to="/">
            <Button
              variant="info"
              type="button"
              data-testid="btn-play-again"
            >
              PLAY AGAIN
            </Button>
          </Link>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  score: state.score.total,
  assertions: state.assertions.total,
});

const mapDispatchToProps = (dispatch) => ({
  setScore: (data) => dispatch(actionScore(data)),
});

Feedback.propTypes = PropTypes.shape({
  score: PropTypes.number,
  assertions: PropTypes.number,
}).isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(Feedback);
