import { combineReducers } from 'redux';

import experience from './experience';
import skills from './skills';
import map from './interests';

const rootReducer = combineReducers({
  experience,
  skills,
  map,
});

export default rootReducer;
