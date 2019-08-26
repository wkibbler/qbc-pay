import React from 'react';
import './App.css';
import { Route, Router } from 'react-router';
import Dashboard from './Dashboard';

function App() {
  return (
    <Router>
    <Route path='/' component={Dashboard} />
    </Router>
  );
}

export default App;
