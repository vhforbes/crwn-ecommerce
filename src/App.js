import React from 'react';
import './App.css';

import HomePage from './pages/HomePage/HomePage'

import { Switch, Route } from 'react-router-dom'

const HatsPage = () => (
  <div>
    HatsPage
  </div>
)

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exat path='/shop/hats' component={HatsPage} />
      </Switch>
    </div>
  );
}

export default App;
