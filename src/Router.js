import React from 'react'
import { View } from 'react-native'
import { Scene, Router, Actions } from 'react-native-router-flux'
import LoginForm from './components/LoginForm'
import EmployeeList from './components/EmployeeList'
import EmployeeCreate from './components/EmployeeCreate'
import EmployeeEdit from './components/EmployeeEdit'

const RouterComponent = () => (
  <Router>
    <Scene key="root" hideNavBar>
      <Scene key="auth">
        <Scene key="login" component={ LoginForm } title="Please Login" titleStyle={ styles.titleStyle } />
      </Scene>
      <Scene key="main">
        <Scene
          key="employeeList" 
          rightTitle="Add"
          onRight={ () => { Actions.employeeCreate() } }
          component={ EmployeeList } 
          title="Employee List" 
          headerLayoutPreset='center'
          renderLeftButton={ () => (<View />) }
          hideTabBar 
          titleStyle={ styles.titleStyle } 
          initial
        />
        <Scene 
          key="employeeCreate" 
          component={ EmployeeCreate } 
          title="Create Employee" 
          titleStyle={ styles.titleStyle }
          renderRightButton={ () => (<View />) }
        />
        <Scene 
          key="employeeEdit" 
          component={ EmployeeEdit } 
          title="Edit employee" 
          titleStyle={ styles.titleStyle }
          renderRightButton={ () => (<View />) }
        />
      </Scene>
    </Scene>
  </Router>
)

export default RouterComponent

const styles = {
  titleStyle: {
    flex: 1, 
    textAlign: 'center'
  }
}
