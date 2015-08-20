import React from 'react';

export default class ReactTemplate extends React.Component {
  _bindFunctions(...funcs) {
    funcs.forEach((func) => { this[func] = this[func].bind(this) });
  }
}