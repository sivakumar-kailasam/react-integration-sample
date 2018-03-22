import ReactComponent from '../../react-component';
import DemoModal from './demo-modal';
import { get, set } from '@ember/object';

export default ReactComponent.extend({

  title: 'An awesome demo',

  onTextChange(text) {
    set(this, 'title', text);
    this.renderModal();
  },

  didInsertElement() {
    this._super(...arguments);
    this.renderModal();
  },

  renderModal() {
    this.reactRender(
      <DemoModal
        title={get(this, 'title')}
        onTextChange={(text) => this.onTextChange(text)}
        />
    );
  }

});
