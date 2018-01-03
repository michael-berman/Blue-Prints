import * as ProjectAPIUtil from '../util/project_api_util';

export const RECEIVE_PROJECTS = 'RECEIVE_PROJECTS';
export const RECEIVE_PROJECT = 'RECEIVE_PROJECT';
export const REMOVE_PROJECT = 'REMOVE_PROJECT';

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

export const removeProject = project => {
  return {
    type: REMOVE_PROJECT,
    projectId
  };
};

export const fetchProjects = () => dispatch => {
  return ProjectAPIUtil.fetchProjects().then((projects) => {
    return dispatch(receiveProjects(projects))
  });
};

export const fetchProject = (projectId) => dispatch => {
  return ProjectAPIUtil.fetchProject(projectId).then((project) => {
    return dispatch(receiveProject(project))
  });
};

export const createProject = (project) => dispatch => {
  return ProjectAPIUtil.createProject(project).then((project) => {
    return dispatch(receiveProject(project))
  });
};

export const deleteProject = (projectId) => dispatch => {
  return ProjectAPIUtil.deleteProject(projectId).then((project) => {
    return dispatch(remove.Project(projectId))
  });
};
