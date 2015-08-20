import './scss/style.scss'; //imports the stylesheet
import React from 'react';
import Router from 'react-router';
import routes from './routes';

Router.run(routes, Router.HashLocation, Handler => {
  React.render(<Handler />, document.body);
});
