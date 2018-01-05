export const fetchSteps = () => {
  return (
    $.ajax({
      method: 'get',
      url: 'api/steps'
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
