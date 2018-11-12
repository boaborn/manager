import { combineReducers} from 'redux'
import AuthReducer from './AuthReducer'

export default combineReducers({
  //auth state is produced by AuthReducer
  auth: AuthReducer
})
