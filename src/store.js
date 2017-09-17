import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import { persistStore, autoRehydrate } from 'redux-persist'
import { AsyncStorage } from 'react-native'
import authReducers from './reducers/authReducers'
import appReducers from './reducers/appReducers'

let store = createStore(combineReducers({
  session: authReducers,
  app: appReducers
}), undefined, compose(autoRehydrate({ log: true })))

export default store;
persistStore(store, { storage: AsyncStorage })