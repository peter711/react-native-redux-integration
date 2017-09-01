import React from 'react';
import {Text, View, Button} from 'react-native';

class HomeScreen extends React.Component {
    render() {
        const { navigate } = this.props.navigation;
        return (
            <Text>
                Home screen
            </Text>
        );
    }
}

export default HomeScreen;