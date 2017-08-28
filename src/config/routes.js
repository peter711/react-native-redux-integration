import {Platform, StatusBar} from 'react-native';
import {StackNavigator} from 'react-navigation';

import HomeScreen from '../screens/HomeScreen';
import UsersScreen from '../screens/UsersScreen';

const routeConfigMap = {
    Home: {
        screen: HomeScreen
    },
    Users: {
        screen: UsersScreen
    }
};

const navigatorConfig = {
    cardStyle: {
        paddingTop: Platform.OS === 'ios'
            ? 0
            : StatusBar.currentHeight
    }
};

const AppNavigator = StackNavigator(routeConfigMap, navigatorConfig);

export default AppNavigator;