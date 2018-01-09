import * as ProjectAPIUtil from '../util/project_api_util';

export const RECEIVE_PROJECTS = 'RECEIVE_PROJECTS';
export const RECEIVE_PROJECT = 'RECEIVE_PROJECT';
export const REMOVE_PROJECT = 'REMOVE_PROJECT';
export const RECEIVE_PROJECT_ERRORS = 'RECEIVE_PROJECT_ERRORS';

export const receiveProjects = projects => {

  return {
    type: RECEIVE_PROJECTS,
    projects
  };
};

export const receiveProject = project => {
  return {
    type: RECEIVE_PROJECT,
    project
  };
};

export const removeProject = projectId => {
  return {
    type: REMOVE_PROJECT,
    projectId
  };
};

export const receiveProjectErrors = errors => {
  return {
    type: RECEIVE_PROJECT_ERRORS,
    errors: errors.responseJSON
  };
};

export const fetchProjects = () => dispatch => {
  ProjectAPIUtil.fetchProjects().then((projects) => {
    return dispatch(receiveProjects(projects))
  }, err => (dispatch(receiveProjectErrors(err))));
};

export const fetchProject = (projectId) => dispatch => {
  return ProjectAPIUtil.fetchProject(projectId).then((project) => {
    return dispatch(receiveProject(project))
  }, err => (dispatch(receiveProjectErrors(err))));
};

export const createProject = (project) => dispatch => {
  return ProjectAPIUtil.createProject(project).then((project) => {
    return dispatch(receiveProject(project))
  }, err => (dispatch(receiveProjectErrors(err))));
};

export const deleteProject = (projectId) => dispatch => {
  return ProjectAPIUtil.deleteProject(projectId).then((project) => {
    return dispatch(remove.Project(projectId))
  }, err => (dispatch(receiveProjectErrors(err))));
};
