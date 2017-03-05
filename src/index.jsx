import React from 'react'
import { render } from 'react-dom'
import firebase from 'firebase'

firebase.initializeApp({
  apiKey: 'AIzaSyDjEmuTDp5yA02oUVwsV6pyYhdiWO90ZrE',
  authDomain: 'reacttr-65405.firebaseapp.com',
  databaseURL: 'https://reacttr-65405.firebaseio.com',
  storageBucket: 'reacttr-65405.appspot.com',
  messagingSenderId: '627392721393'
})

import App from './components/App'

render(<App />, document.getElementById('root'))
