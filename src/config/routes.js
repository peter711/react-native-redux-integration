import React from 'react';
import {Platform, StatusBar} from 'react-native';
import {StackNavigator, DrawerNavigator} from 'react-navigation';

import SplashScreen from '../screens/SplashScreen';
import HomeScreen from '../screens/HomeScreen';
import UsersScreen from '../screens/UsersScreen';
import MapScreen from '../screens/MapScreen';

import DrawerButton from '../components/DrawerButton';

const DrawerNav = new DrawerNavigator({
    Home: {
        screen: HomeScreen
    },
    Users: {
        screen: UsersScreen
    },
    Map: {
        screen: MapScreen
    }
}, {
    navigationOptions: ({navigation}) => ({headerLeft: <DrawerButton navigate={navigation.navigate}/>})
});

const AppNavigator = StackNavigator({
    Splash: {
        screen: SplashScreen,
        navigationOptions: ({navigation}) => ({
            header : null
        })
    },
    Main: {
        screen: DrawerNav
    }
}, {
    cardStyle: {
        paddingTop: Platform.OS === 'ios'
            ? 0
            : StatusBar.currentHeight
    }
});

export default AppNavigator;