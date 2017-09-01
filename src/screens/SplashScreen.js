import React from 'react';
import {View, Text, ActivityIndicator} from 'react-native';

import { colors } from '../../styles';

class SplashScreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <ActivityIndicator size={150}/>
                <Text style={styles.text}>
                    Loading...
                </Text>
            </View>
        );
    }

}

const styles = {
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.blue
    },
    text: {
        paddingTop: 20,
        fontSize: 18,
        color: colors.white
    }
}

export default SplashScreen;