import React from 'react';
import {Text, View, Button} from 'react-native';

class HomeScreen extends React.Component {
    static navigationOptions = {
        title: 'Home'
    };

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View>
                <Button onPress={() => navigate('Users')} title="Users"/>
            </View>
        );
    }
}

export default HomeScreen;