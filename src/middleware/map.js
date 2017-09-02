import {watchPosition, updateCurrentPosition} from '../actions/map';

const OPTIONS = {
    enableHighAccuracy: false,
    timeout: 5000,
    maximumAge: 0
};

let watchId = null;

export function startWatchGeolocation() {
    return dispatch => {
        dispatch(watchPosition());
        getCoordinates(dispatch);
    }
}

function getCoordinates(dispatch) {
    watchId = navigator
        .geolocation
        .watchPosition(pos => successGetCoordinatesCallback(pos, dispatch), err => console.error(err), OPTIONS);
}

function successGetCoordinatesCallback(pos, dispatch) {
    const coords = pos.coords;
    dispatch(updateCurrentPosition(coords));
}