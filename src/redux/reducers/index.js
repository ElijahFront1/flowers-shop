import { combineReducers } from 'redux';

import flowersReducer from './flowers'
import sortReducer from './sort'

const rootReducer = combineReducers({
    sort :sortReducer,
    flowers :flowersReducer,
});

export default rootReducer; 