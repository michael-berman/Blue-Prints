import merge from 'lodash/merge';

import {
  RECEIVE_PROJECTS, RECEIVE_PROJECT,
  REMOVE_PROJECT} from '../actions/project_actions';

const ProjectsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;
  let newAction = Object.assign({}, action);
  if (newAction.projects ){
    if (newAction.projects.query){
      delete newAction['query'];
    }
  }
  let project = merge({}, action.project)
  switch (action.type) {
    case RECEIVE_PROJECTS:

      newState = merge({}, newAction.projects)
      return newState;
    case RECEIVE_PROJECT:
      let newProject = {[project.id]: project};
      delete Object.values(newProject)[0]['comments'];
      delete Object.values(newProject)[0]['steps'];
      newState = merge({}, state, newProject);
      return newState;
    case REMOVE_PROJECT:
      newState = merge({}, state);
      delete newState[action.projectId]
      return newState;
    default:
      return state;
  }
}

export default ProjectsReducer;
