import React from 'react';
import ReactTemplate from './ReactTemplate';

export default class NotFoundHandler extends ReactTemplate {
  render() {
    return (
      <div>
        <h1>404.</h1>
        <p>Sorry, we have no idea what you're looking for...</p>
      </div>
    );
  }
}
