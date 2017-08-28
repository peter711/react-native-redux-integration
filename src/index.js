import React from 'react';
import {addNavigationHelpers} from 'react-navigation';
import {Provider, connect} from 'react-redux';
import AppNavigator from './config/routes';
import configureStore from './config/store';

class App extends React.Component {
    render() {
        return (<AppNavigator
            navigation={addNavigationHelpers({dispatch: this.props.dispatch, state: this.props.nav})}/>);
    }
}

const mapStateToProps = (state) => ({nav: state.nav});
const AppWithNavigationState = connect(mapStateToProps)(App);
const store = configureStore();

export default class Root extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <AppWithNavigationState/>
            </Provider>
        );
    }
}
