import React from 'react';
import {View, TouchableOpacity, Image} from 'react-native';
import {connect} from 'react-redux';

class DrawerButton extends React.Component {
    onClickHandler() {
        this
            .props
            .navigate('DrawerOpen');
    }

    render() {
        return (
            <View>
                <TouchableOpacity onPress={() => this.onClickHandler()} style={styles.touch}>
                    <Image source={require('../../assets/img/menu.png')} style={styles.icon}/>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = {
    icon: {
        width: 32,
        height: 32
    },
    touch: {
        paddingLeft: 8
    }
}

export default DrawerButton;