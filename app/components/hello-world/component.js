import Component from '@ember/component';
import ReactDOM from 'react-dom';

let Greeter = ({name}) => <h2>Hello from {name}!!!</h2>;

export default Component.extend({
  didInsertElement() {
    this._super(...arguments);

    ReactDOM.render(
      <Greeter name="React"/>,
      this.element.querySelector('.react-container'),
    );
  }
});
