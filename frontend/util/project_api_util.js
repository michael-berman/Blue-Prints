
export const fetchProjects = () => {
  return $.ajax({
    method: 'get',
    url: 'api/projects'
  });
};

export const fetchProject = id => {
  return $.ajax({
    method: 'get',
    url: `api/projects/${id}`
  });
};

export const createProject = formData => {
  return $.ajax({
    method: 'post',
    url: 'api/projects',
    data: { project },
    processData: false,
    contentType: false,
    dataType: 'json',
    data: formData
  });
};
export const deleteProject = id => {
  return $.ajax({
    method: 'delete',
    url: `api/projects/${id}`
  });
};
