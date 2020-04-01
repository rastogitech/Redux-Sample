/**
 * @format
 */

import React from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {Provider} from 'react-redux';
import {combineReducers, createStore} from 'redux';
import {taskReducer} from './src/core/redux/reducer/TaskReducer';

const rootReducer = combineReducers({
  taskReducer: taskReducer,
});

const store = createStore(rootReducer);

const rootComponent = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

AppRegistry.registerComponent(appName, () => rootComponent);
