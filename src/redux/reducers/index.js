import { combineReducers } from 'redux';

import sort from './sort'
import flowers from './flowers'
import cart from './cart'

const rootReducer = combineReducers({
    sort,
    flowers,
    cart,
});

export default rootReducer; 