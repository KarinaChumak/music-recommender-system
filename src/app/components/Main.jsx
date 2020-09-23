import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../store';
import { Navigation } from './Navigation';
import { Router, Route } from 'react-router-dom';
import { history } from '../store/history';

export const Main = () => (
  <Router history={history}>
    <Provider store={store}>
      <div>
        <Navigation>

        </Navigation>
        {/* <Route
          exact
          path="/dashboard"
          render={() => (<Navigation />)}>

        </Route> */}
      </div>
    </Provider>
  </Router>

)