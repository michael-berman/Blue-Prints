import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect, withRouter } from 'react-router-dom';

const Auth = ({ component: Component, path, loggedIn}) => (
  <Route path={path} render={(props) => (
      !loggedIn ? (
        <Component {...props} />
        ) : (
          <Redirect to="/" />
        )
      )
    )} />
);

const mapStatetoProps = state => (
  { loggedIn: Boolean(state.session.currentUser)}
);

export const AuthRoute = withRouter(connect(mapStatetoProps, null)(Auth));
