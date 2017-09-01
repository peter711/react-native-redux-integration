import { WATCH_CURRENT_POSITION, UPDATE_CURRENT_POSITION } from '../actions/map';

const intialState = {
    coordinates: null
};

export default function (state = intialState, action) {
    switch(action.type) {
        case WATCH_CURRENT_POSITION: 
            return {
                ...state
            }
        case UPDATE_CURRENT_POSITION:
            console.log(action.coordinates);
            return {
                ...state,
                coordinates: action.coordinates
            }
        default:
            return state;
    }
}