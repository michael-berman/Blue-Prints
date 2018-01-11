import { combineReducers } from 'redux';

import projects from './projects_reducer';
import users from './users_reducer';
import search from './search_reducer';

export default combineReducers({
  projects,
  users,
  search
});
