import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../store';
import { Navigation } from './Navigation';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { history } from '../store/history';
import SidebarExample from './nav';

export const Main = () => (
  // <SidebarExample></SidebarExample>
  <Router >
    <Provider store={store}>
      <div>
        <Navigation>

        </Navigation>
      </div>
    </Provider>
  </Router>

)