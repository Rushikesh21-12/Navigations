/**
 * @format
 */

import {AppRegistry} from 'react-native';
import AppStack from './AppStack';
import AppBottomTab from './AppBottomTab';
import AppTabStack from './AppTabStack';
import AppStackTab from './AppStackTab';
import AppMB from './AppMB';
import AppMT from './AppMT';
import {name as appName} from './app.json';
import AppDrawer from './APPDrawer';
import AllTabs from './AllTabs'

AppRegistry.registerComponent(appName, () => AllTabs);
//Changes made by another dev