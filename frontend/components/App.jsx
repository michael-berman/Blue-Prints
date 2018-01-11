import React from 'react';
import SessionFormContainer from './session_form/session_form_container';
import { Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import HomePageContainer from './home_page/home_page_container';
import NavBarContainer from './navbar/navbar_container';
import ProjectShowContainer from './project_show/project_show_container';
import ProjectFormContainer from './project_form/project_form_container';
import Footer from './footer/footer';
import UserShowContainer from './user_show/user_show_container';
import ProjectSearchContainer from './project_search/project_search_container';

const App = () => {
  return (
    <div>
      <NavBarContainer />
      <Switch>
        <AuthRoute path='/login' component={SessionFormContainer} />
        <AuthRoute path='/signup' component={SessionFormContainer} />
        <ProtectedRoute path='/projects/new' component={ProjectFormContainer} />
        <Route path='/projects/search' component={ProjectSearchContainer} />
        <Route path='/projects/:projectId' component={ProjectShowContainer} />
        <Route path='/users/:userId' component={UserShowContainer} />
        <Route exact path='/' component={HomePageContainer}/>
      </Switch>
      <Footer />
    </div>
  )
};

export default App;
