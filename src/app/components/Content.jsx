import React, { useState } from 'react';
import { connect } from 'react-redux';
import { List, Typography } from 'antd';
import { Route, Switch } from 'react-router-dom';
import { Test } from './Test';
import { ConnectedPlaylistsTab } from './PlaylistsTab';

export const Content = () => {
  return (
    <Switch>
      <Route
        exact
        path="/dashboard"
        children={<h2>Home</h2>}>

      </Route>
      <Route
        exact
        path="/test"
        children={<Test />}>

      </Route>
    </Switch>

  )
}

{/* <Switch>
<Route
  key={1}
  exact
  path="/dashboard"
  children={<h2>Home</h2>} />
<Route
  key={2}
  exact
  path="/test"
  children={<h2> test </h2>} />
</Switch> */}