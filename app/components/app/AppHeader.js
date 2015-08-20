import React from 'react';
import ReactTemplate from '.././shared/ReactTemplate';
import { Link } from 'react-router';

export default class AppHeader extends ReactTemplate {
  render() {
    return (
      <header className='app-header-wrapper'>
        <Link to='login'>Login</Link>
        <Link to='join'>Join</Link>
      </header>
    );
  }
}