/**
 * @format
 */

import React from 'react';
import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import rootReducers from './reducers/rootReducer';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas/rootSaga';

import MovieContainer from './containers/MovieContainer';

const sagaMiddleWare = createSagaMiddleware();

let store = createStore(rootReducers, applyMiddleware(sagaMiddleWare));
const App = () => (
  <Provider store={store}>
    <MovieContainer />
  </Provider>
);
sagaMiddleWare.run(rootSaga);
AppRegistry.registerComponent(appName, () => App);
