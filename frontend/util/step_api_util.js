export const fetchSteps = (projectId) => {
  return (
    $.ajax({
      method: 'get',
      url: 'api/steps',
      data: { projectId }
    })
  );
};

export const createStep = step => {
  return (
    $.ajax({
      method: 'post',
      url: 'api/steps',
      data: {step}
    })
  );
};
