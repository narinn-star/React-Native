/**
 * @format
 */

import { AppRegistry } from 'react-native';
//import App from './App';
import App from './src/App';
//import New_App from './src/New_App';
import { name as appName } from './app.json';

//const TodoApp = () => <App />

AppRegistry.registerComponent(appName, () => App);
