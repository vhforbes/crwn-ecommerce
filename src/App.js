import { React, useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom'
import './App.css';

import HomePage from './pages/HomePage/HomePage'
import ShopPage from './pages/ShopPage/ShopPage'
import SignInAndUpPage from './pages/SignInAndUp/SignInAndUp'

import Header from './components/Header/Header'

import { auth, createUserProfileDocument } from './firebase/firebase.utils'

function App() {

  const [ currentUser, setCurrentUser ] = useState()

  useEffect(() => {
    const unsubscribeFromAuth = () => auth.onAuthStateChanged(async userAuth => { 

      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth)
        userRef.onSnapshot(snapshot => {
        setCurrentUser({
          id: snapshot.id,
          ...snapshot.data()
        })
        })
      } else {
        setCurrentUser(userAuth) // Will set to null when not logged in
      }
    })
    unsubscribeFromAuth()
  }, [])

  return (
    <div>
      <Header currentUser={currentUser} />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/shop' component={ShopPage} />
        <Route exact path='/signin' component={SignInAndUpPage} />
      </Switch>
    </div>
  );
}

export default App;
