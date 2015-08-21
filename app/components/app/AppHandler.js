import React from 'react';
import ReactTemplate from '../shared/ReactTemplate';
import { RouteHandler } from 'react-router';

import AppHeader from './AppHeader';

export default class AppHandler extends ReactTemplate {
  render() {
    return (
      <div className='app-handler-wrapper'>
        <AppHeader />
              
        {/* Route Handler needed in order for Routes to work properly */}
        <RouteHandler />
      </div>
    );
  }
}
