/**
 * @format
 */
import React from 'react'
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

import { Provider } from 'react-redux'
import Store  from './src/Redux/Store'



const Redux =() =>

    <Provider  store={Store}>
            <App></App>
    </Provider>



AppRegistry.registerComponent(appName, () => Redux);
