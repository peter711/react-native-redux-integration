import { combineReducers } from 'redux';
import navReducer from './navigation';
import appReducer from './app';
import mapReducer from './map';

const rootReducer = combineReducers({
    nav: navReducer,
    app: appReducer,
    map: mapReducer
});

export default rootReducer;