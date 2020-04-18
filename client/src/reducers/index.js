// pull in all the component reducers meeting place for all the components

import {combineReducers} from 'redux';
import itemReducer from './itemReducer';
// example add an Auth reducer like the itemReducer above, create the file and add to the object below.

export default combineReducers({
    item: itemReducer
    // example: auth: authReducer
});