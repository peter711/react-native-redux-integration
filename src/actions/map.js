export const WATCH_CURRENT_POSITION = 'WATCH_CURRENT_POSITION';
export const UPDATE_CURRENT_POSITION = 'UPDATE_CURRENT_POSITION';

export function watchPosition() {
    return {
        type: WATCH_CURRENT_POSITION
    };
}

export function updateCurrentPosition(coordinates) {
    return {
        type: UPDATE_CURRENT_POSITION,
        coordinates
    }
}

