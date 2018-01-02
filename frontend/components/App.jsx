import React from 'react';
import SessionFormContainer from './session_form/session_form_container';

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
