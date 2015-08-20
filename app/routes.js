import React from 'react';
import Router from 'react-router';
import { Route, DefaultRoute, NotFoundRoute } from 'react-router';

import AppHandler from './components/app/AppHandler';
import HomeHandler from './components/home/HomeHandler';
import LoginHandler from './components/authentication/LoginHandler';
import JoinHandler from './components/authentication/JoinHandler';

import NotFoundHandler from './components/shared/NotFoundHandler';

let routes = (
  <Route path='/' handler={AppHandler}>
    <DefaultRoute handler={HomeHandler} />
    <Route name='login' path='/login' handler={LoginHandler} />
    <Route name='join' path='/join' handler={JoinHandler} />
    <NotFoundRoute handler={NotFoundHandler} />
  </Route>
);

export default routes;