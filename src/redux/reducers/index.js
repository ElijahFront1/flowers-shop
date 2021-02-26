import { combineReducers } from 'redux';

import sortReducer from './sortReducer'
import shopReducer from './shopReducer'
import cartReducer from './cartReducer'

const rootReducer = combineReducers({
    sortReducer,
    shopReducer,
    cartReducer,
});

export default rootReducer; 