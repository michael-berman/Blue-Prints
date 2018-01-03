import { combineReducers } from 'redux';

import session from './session_errors_reducer';
import projects from './projects_errors_reducer';

//Add other errors to here once comments come up

export default combineReducers({
  session,
  projects
})
