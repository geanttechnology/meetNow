// React
import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

// Components
import App from './app';
import Welcome from './welcome/welcome';
import HomePage from './home/home_page';
// import AuthFormContainer from './authform/auth_form_container';
// import LogInContainer from './authform/login';
import AuthForm from './authform/auth_form';

const Root = ({ store }) => {

  const _ensureLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (!currentUser) {
      replace('/login');
    }
  };

  const _redirectIfLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (currentUser) {
      replace('/');
    }
  };

  return (
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={Welcome} />
          <Route path="login" component={AuthForm} onEnter={_redirectIfLoggedIn} />
          <Route path="signup" component={AuthForm} onEnter={_redirectIfLoggedIn} />
        </Route>
      </Router>
    </Provider>
  );
};

export default Root;
