import { React, useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom'
import './App.css';

import HomePage from './pages/HomePage/HomePage'
import ShopPage from './pages/ShopPage/ShopPage'
import SignInAndUpPage from './pages/SignInAndUp/SignInAndUp'

import Header from './components/Header/Header'

import { auth } from './firebase/firebase.utils'

function App() {

  const [ currentUser, setCurrentUser ] = useState(null)

  

  useEffect(() => {

    let unsubscribeFromAuth = null

    unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      setCurrentUser(user)
    })

    unsubscribeFromAuth()
  }, [])

  return (
    <div>
      <Header currentUser={currentUser}/>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/shop' component={ShopPage} />
        <Route exact path='/signin' component={SignInAndUpPage} />
      </Switch>
    </div>
  );
}

export default App;
