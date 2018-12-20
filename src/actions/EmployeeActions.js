import firebase from 'firebase'
import { Actions } from 'react-native-router-flux'
import { 
  EMPLOYEE_UPDATE,
  EMPLOYEE_CREATE,
  EMPLOYEES_FETCH_SUCCESS,
  EMPLOYEES_SAVE_SUCCESS
} from './types'

export const employeeUpdate = ({ prop, value }) => ({
  type: EMPLOYEE_UPDATE,
  payload: { prop, value}
})

export const employeeCreate = ({ name, phone, shift }) => {
  //Get current login user id 
  const { currentUser } = firebase.auth()
  //ref to (address)
  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/employees`)
      .push({name, phone, shift})
      .then(() => {
        dispatch({type: EMPLOYEE_CREATE})
        Actions.pop()
        
      })
  }
}

export const employeesFetch = () => (dispatch) => {
  const { currentUser } = firebase.auth()
  firebase.database().ref(`/users/${currentUser.uid}/employees`)
    .on('value', snapshot => {
      dispatch({type: EMPLOYEES_FETCH_SUCCESS, payload: snapshot.val()})
    })
}

export const employeeSave = ({ name, phone, shift, uid }) => {
  const { currentUser } = firebase.auth()
  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/employees/${uid}`)
      .set({ name, phone, shift})
      .then(() => {
        dispatch({type: EMPLOYEES_SAVE_SUCCESS})
        Actions.employeeList({type: 'reset'})
      })
  }
}
