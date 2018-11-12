import React, { Component } from 'react'
import { View, Text} from 'react-native'
import { Provider } from 'react-redux'
import { createStore} from 'redux'
import firebase from 'firebase'
import reducers from './reducers'

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
        <View>
          <Text>Hello!</Text>
        </View>
      </Provider>
    )
  }
}

export default App