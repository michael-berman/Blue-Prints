import React from 'react';

const App = () => {
  return (
    <div>
      <h1>Welcome to Blue Prints</h1>
      <Route path='/login' component={SessionFormContainer} />
      <Route path='/signup' component={SessionFormContainer} />
    </div>
  )
};

export default App;
