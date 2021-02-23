import { combineReducers } from 'redux';

import sortReducer from './sortReducer'
import flowersReducer from './flowersReducer'
import cartReducer from './cartReducer'

const rootReducer = combineReducers({
    sortReducer,
    flowersReducer,
    cartReducer,
});

export default rootReducer; 