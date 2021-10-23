import { combineReducers, createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { watcherSaga } from './sagas'
import userReducer from './reducers/user'
import postsReducer from './reducers/posts'
import albumsReducer from './reducers/albums'

const reducers = combineReducers({
  users: userReducer,
  posts: postsReducer,
  albums: albumsReducer
})

const sagaMiddleware = createSagaMiddleware()
const middleWare = [sagaMiddleware]

const store = createStore(reducers, {}, applyMiddleware(...middleWare))

sagaMiddleware.run(watcherSaga)

export default store;