import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../store';
import { Navigation } from './Navigation';
import { BrowserRouter as Router, Route } from 'react-router-dom';

export const Main = () => (
  <Router >
    <Provider store={store}>
      <div>
        <Navigation>

        </Navigation>
      </div>
    </Provider>
  </Router>

)