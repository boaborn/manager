import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, Text} from 'redux'
import firebase from '@firebase/app' //eslint-disable-line
import ReduxThunk from 'redux-thunk'
import reducers from './reducers'
import LoginForm from './components/LoginForm'
import Router from './Router'

console.disableYellowBox = true
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
    //{} pass init state eg email,password
    //applyMiddleware is store enhancer
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk)) 
    
    return (
      <Provider store={ store }>
        <Router /> 
      </Provider>
    )
  }
}

export default App
