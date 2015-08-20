import React from 'react';
import Router from 'react-router';
import { Route, DefaultRoute } from 'react-router';

import AppHandler from './components/app/AppHandler';

let routes = (
  <Route path='/' handler={AppHandler}/>
);

export default routes;