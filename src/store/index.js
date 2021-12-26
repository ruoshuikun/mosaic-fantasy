import { combineReducers } from 'redux'
import { createStore } from 'redux'
import user from './header'

const reducer = combineReducers({
  user
})

export default createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
