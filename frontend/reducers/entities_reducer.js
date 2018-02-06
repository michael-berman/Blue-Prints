import { combineReducers } from 'redux';

import projects from './projects_reducer';
import users from './users_reducer';
import search from './search_reducer';
import comments from './comments_reducer';
import steps from './steps_reducer';
import favorites from './favorites_reducer';


export default combineReducers({
  projects,
  steps,
  comments,
  users,
  favorites,
  search
});
