import React from 'react';
import {Provider} from 'react-redux';

import configureStore from './config/store';
import { initializeApp } from './middleware/app';

import AppWithNavigationState from './App';

/* --- App initiliazation --- */
const store = configureStore();
store.dispatch(initializeApp());
/* -------------------------- */

export default class Root extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <AppWithNavigationState/>
            </Provider>
        );
    }
}
