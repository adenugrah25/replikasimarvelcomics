import { combineReducers } from 'redux';

import { contentReducer } from './contentReducer';

const allReducer = combineReducers({
    content: contentReducer
})

export default allReducer;