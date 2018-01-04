import React from 'react';
import SessionFormContainer from './session_form/session_form_container';
import { Route } from 'react-router-dom';
import { AuthRoute } from '../util/route_util';
import HomePageContainer from './home_page/home_page_container';
import NavBarContainer from './navbar/navbar_container';

const App = () => {
  return (
    <div>
      <NavBarContainer />
      <Route exact path='/' component={HomePageContainer}/>
      <AuthRoute path='/login' component={SessionFormContainer} />
      <AuthRoute path='/signup' component={SessionFormContainer} />
    </div>
  )
};

export default App;
