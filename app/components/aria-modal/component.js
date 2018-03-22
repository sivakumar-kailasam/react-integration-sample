import ReactComponent from '../../react-component';
import DemoModal from './demo-modal';

export default ReactComponent.extend({

  didInsertElement() {
    this._super(...arguments);
    this.reactRender(<DemoModal title="An awesome demo"/>);
  }

});
