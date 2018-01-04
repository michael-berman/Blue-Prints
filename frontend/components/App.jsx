import React from 'react';
import SessionFormContainer from './session_form/session_form_container';
import { Route, Switch } from 'react-router-dom';
import { AuthRoute } from '../util/route_util';
import HomePageContainer from './home_page/home_page_container';
import NavBarContainer from './navbar/navbar_container';
import ProjectShowContainer from './project_show/project_show_container';

const App = () => {
  return (
    <div>
      <NavBarContainer />
      <Switch>
        <AuthRoute path='/login' component={SessionFormContainer} />
        <AuthRoute path='/signup' component={SessionFormContainer} />
        <Route path='/projects/:projectId' component={ProjectShowContainer} />
        <Route exact path='/' component={HomePageContainer}/>
      </Switch>
    </div>
  )
};

export default App;
