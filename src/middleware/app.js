import {initApp, initAppDone} from '../actions/app';

export function initializeApp() {
    return dispatch => {
        dispatch(initApp())

        //Mocked initialization
        setInterval(() => {
            dispatch(initAppDone());
        }, 3 * 1000);
    }
}