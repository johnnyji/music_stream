import React from 'react';
import ReactTemplate from '.././shared/ReactTemplate';
import { Link } from 'react-router';

export default class AppHeader extends ReactTemplate {
  render() {
    return (
      <header className='app-header-wrapper'>
        <div className='pull-right'>
          <Link className='link' to='login'>Login</Link>
          <Link className='link' to='join'>Join</Link>
        </div>
      </header>
    );
  }
}