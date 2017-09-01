import { combineReducers } from 'redux';
import navReducer from './navigation';
import appReducer from './app';

const rootReducer = combineReducers({
    nav: navReducer,
    app: appReducer
});

export default rootReducer;