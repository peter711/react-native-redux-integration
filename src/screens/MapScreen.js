import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {connect} from 'react-redux';
import MapView from 'react-native-maps';

import {startWatchGeolocation} from '../middleware/map';

class MapScreen extends React.Component {

    componentDidMount() {
        this
            .props
            .watchCoordinates();
    }

    renderMapView() {
        const {coordinates} = this.props;
        return (
            <MapView
                style={styles.map}
                initialRegion={{
                latitude: coordinates.latitude,
                longitude: coordinates.longitude,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421
            }}>
                {this.renderCurrentLocationMarker()}
            </MapView>
        );
    }

    renderCurrentLocationMarker() {
        const {coordinates} = this.props;
        return (<MapView.Marker coordinate={coordinates}/>);
    }

    render() {
        const {coordinates} = this.props;
        return (
            <View style={styles.container}>
                {coordinates && this.renderMapView()}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    map: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
    }
});

const mapStateToProps = (state) => {
    return {coordinates: state.map.coordinates}
};

const mapDispatchToProps = (dispatch) => {
    return {
        watchCoordinates: () => {
            dispatch(startWatchGeolocation())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MapScreen);