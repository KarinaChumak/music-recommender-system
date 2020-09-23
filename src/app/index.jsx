import { store } from './store/index.js'
import React from 'react';
import ReactDOM from 'react-dom';
import { Dashboard } from './components/Dashboard';
import { Main } from './components/Main.jsx';


ReactDOM.render(
  <Main />,
  document.getElementById("app")
);