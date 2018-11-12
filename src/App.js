import React, { Component } from 'react'
import { View, Text} from 'react-native'
import { Provider } from 'react-redux'
import { createStore} from 'redux'
import firebase from '@firebase/app' //eslint-disable-line
import reducers from './reducers'
import LoginForm from './components/LoginForm'

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyAXmdy5DuF1DmA8V_Z_LYuuqRXsn4681_w',
      authDomain: 'manager-1d3da.firebaseapp.com',
      databaseURL: 'https://manager-1d3da.firebaseio.com',
      projectId: 'manager-1d3da',
      storageBucket: 'manager-1d3da.appspot.com',
      messagingSenderId: '340915821512'
    }
    firebase.initializeApp(config)
  }

  render() {
    return (
      <Provider store={ createStore(reducers) }>
        <LoginForm />
      </Provider>
    )
  }
}

export default App
