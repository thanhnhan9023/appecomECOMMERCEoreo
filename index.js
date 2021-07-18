/**
 * @format
 */
import React from 'react'
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

import { Provider } from 'react-redux'
import {store,persitor}  from './src/Redux/Store'
import { PersistGate } from 'redux-persist/integration/react'

const Redux =() =>

    <Provider  store={store}>
          <PersistGate loading={null} persistor={persitor}>
            <App></App>
            </PersistGate>
    </Provider>



AppRegistry.registerComponent(appName, () => Redux);
