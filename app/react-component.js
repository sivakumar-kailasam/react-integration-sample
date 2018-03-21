import Component from '@ember/component';
import ReactDOM from 'react-dom';
import { set } from '@ember/object';


export default Component.extend({

  reactRender(reactElement) {
    let elem = ReactDOM.render(
      reactElement,
      this.element,
    );
    set(this, '_renderedReactElement', elem);
  },

  willDestroyComponent() {
    this._super();
    ReactDOM.unmountComponentAtNode(this.element);
  }
})
