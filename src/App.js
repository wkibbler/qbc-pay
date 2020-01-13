import React, { Component } from 'react';
import './App.css';
import Dashboard from './Dashboard'

import { BrowserRouter as Router, Route } from 'react-router-dom';


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return (
      <Router>
      <Route path="/:to/:amount" component={Dashboard}/>
      </Router>
    );
  }
}