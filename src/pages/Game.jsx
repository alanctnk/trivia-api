import React, { Component } from 'react';
import './Home.css';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import Perguntas from '../components/Perguntas';
import fetchPerguntas from '../redux/actions/perguntasThunk';

class Game extends Component {
  componentDidMount() {
    const { pedePerguntas } = this.props;
    const token = localStorage.getItem('token');
    pedePerguntas(token);
  }

  render() {
    return (
      <div>
        <Header />
        <Perguntas />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  pedePerguntas: (token) => dispatch(fetchPerguntas(token)),
});

Game.propTypes = PropTypes.func.isRequired;
export default connect(null, mapDispatchToProps)(Game);
