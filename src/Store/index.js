import { combineReducers, createStore } from 'redux'
import UserReducer from './Reducers/User'

const reducers = combineReducers({ user: UserReducer })

const store = createStore(reducers)

export default store