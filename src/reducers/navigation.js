import {NavigationActions} from 'react-navigation';
import AppNavigator from '../config/routes';

const initialState = AppNavigator
    .router
    .getStateForAction(NavigationActions.reset({
        index: 0,
        actions: [NavigationActions.navigate({routeName: 'Splash'})]
    }))

export default function (state = initialState, action) {
    const nextState = AppNavigator
        .router
        .getStateForAction(action, state);

    // Simply return the original `state` if `nextState` is null or undefined.
    return nextState || state;
}