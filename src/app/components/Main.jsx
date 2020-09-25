import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../store';
import { Navigation } from './Navigation';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Test } from './Test';
import { ConnectedSignUp } from './SignUp';

export const Main = () => (
  <Router >
    <Provider store={store}>
      <Route
        exact
        path="/"
        children={<ConnectedSignUp></ConnectedSignUp>}>
      </Route>
      <div>
        <Navigation>

        </Navigation>
      </div>
    </Provider>
  </Router>

)