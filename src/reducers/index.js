import { combineReducers } from 'redux';

import experience from './experience';
import skills from './skills';

const rootReducer = combineReducers({
  experience,
  skills,
});

export default rootReducer;
