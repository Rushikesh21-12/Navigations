/**
 * @format
 */

import {AppRegistry} from 'react-native';
import AppStack from './AppStack';
import AppBottomTab from './AppBottomTab';
import AppTabStack from './AppTabStack';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => AppTabStack);
