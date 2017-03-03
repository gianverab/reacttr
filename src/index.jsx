import React from 'react'
import { render } from 'react-dom'
import firebase from 'firebase'

import App from './components/App'

// Initialize Firebase

firebase.initializeApp({
  apiKey: 'AIzaSyDjEmuTDp5yA02oUVwsV6pyYhdiWO90ZrE',
  authDomain: 'reacttr-65405.firebaseapp.com',
  databaseURL: 'https://reacttr-65405.firebaseio.com',
  storageBucket: 'reacttr-65405.appspot.com',
  messagingSenderId: '627392721393'
})

render(<App />, document.getElementById('root'))
