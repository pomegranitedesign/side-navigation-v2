import React, { Component, Fragment } from 'react';
import { Transition } from 'react-spring';
import { Link } from 'react-router-dom';

import ContentContainer from '../../Components/ContentContainer/ContentContainer';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ContentContainer />
      </div>
    );
  }
}

export default App;