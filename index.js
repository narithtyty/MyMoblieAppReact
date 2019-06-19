/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import {AppRegistry} from 'react-native';
//import App from './App';
//import App from './src/Drawer.1';

//Main
import App from './src/reactNavigation';


//import App from './src/HomeContainer';
//import App from './src/Main';
//import App from './src/TabNavigator.1';
//import App from './CardList';
//import App from './src/FlatGrid';

//import App from './src/Calendar_1';
//import App from './src/Form';
//import App from './src/QRcode';
//import App from './src/DatePicker';
//import App from './src/PickerModal';
//import App from './src/PickerInput';

// TouchId
//import App from './src/TouchID';
//import App from './src/TabNavigator';
// Auth
//import App from './src/AuthFlow';
//import App from './src/userActivitor';
//import App from './src/AwesomeAlert';

//image
//import App from './src/ImagePicker';
//import App from './src/DynamicCard'
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
