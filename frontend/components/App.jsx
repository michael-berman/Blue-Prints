import React from 'react';
import SessionFormContainer from './session_form/session_form_container';
import { Route } from 'react-router-dom';
import { AuthRoute } from '../util/route_util';
import ProjectIndexContainer from './project_index/project_index_container';

const App = () => {
  return (
    <div>
      <Route exact path='/' component={ProjectIndexContainer}/>
      <AuthRoute path='/login' component={SessionFormContainer} />
      <AuthRoute path='/signup' component={SessionFormContainer} />
    </div>
  )
};

export default App;
