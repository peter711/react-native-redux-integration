import React from 'react';
import {Text, View, Button} from 'react-native';

class UsersScreen extends React.Component {
    static navigationOptions = {
        title: 'Users'
    };

    render() {
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