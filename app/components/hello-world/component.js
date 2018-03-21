import Component from '@ember/component';
import React from 'react';
import ReactDOM from 'react-dom';

export default Component.extend({
  didInsertElement() {
    this._super(...arguments);

    ReactDOM.render(
      React.createElement('h2', null, 'Hello from React'),
      this.element.querySelector('.react-container'),
    );
  }
});
