import {INITIALIZING_APP, INITIALIZING_APP_DONE} from '../actions/app';

const initialState = {
    initialized: false
};

export default function (state = initialState, action) {
    switch (action.type) {
        case INITIALIZING_APP:
            return {
                ...state,
                initialized: false
            };
        case INITIALIZING_APP_DONE:
            return {
                ...state,
                initialized: true
            };
        default:
            return state;
    }
}