import { combineReducers } from 'redux';

import projects from './projects_reducer';
import steps from './steps_reducer';

export default combineReducers({
  projects
});
