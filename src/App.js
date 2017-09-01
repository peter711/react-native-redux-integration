import React from 'react';
import {NavigationActions} from 'react-navigation';
import {addNavigationHelpers} from 'react-navigation';
import {connect} from 'react-redux';

import AppNavigator from './config/routes';

class App extends React.Component {
    componentDidUpdate(prevProps) {
        if (this.appHasBeenInitialized(prevProps)) {
            this
                .props
                .navToMainScreen();
        }
    }

    render() {
        return (<AppNavigator
            navigation={addNavigationHelpers({dispatch: this.props.dispatch, state: this.props.nav})}/>);
    }

    ///

    appHasBeenInitialized(prevProps) {
        return prevProps.app.initialized !== this.props.app.initialized && this.props.app.initialized;
    }
}

const mapStateToProps = (state) => ({nav: state.nav, app: state.app});

const mapDispatchToProps = (dispatch) => {
    return {
        dispatch,
        navToMainScreen: () => dispatch(NavigationActions.navigate({routeName: 'Main'}))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
