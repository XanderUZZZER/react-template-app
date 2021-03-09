import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import { themeReducer } from './reducers/themeReducers';


const reducer = combineReducers({
  theme: themeReducer
})

const themeFromStorage = localStorage.getItem('theme')
  ? JSON.parse(JSON.stringify(localStorage.getItem('theme')))
  : 'light'

const initialState = {
  theme: {
    value: themeFromStorage
  }
}

const middleware = [thunk]

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store