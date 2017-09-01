import React from 'react';
import {Text, View, Button} from 'react-native';

class UsersScreen extends React.Component {
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View>
                <Text>
                    Users screen
                </Text>
            </View>
        );
    }
}

export default UsersScreen;