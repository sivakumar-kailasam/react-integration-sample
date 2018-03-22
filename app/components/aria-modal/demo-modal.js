import React from 'react';
import AriaModal from 'react-aria-modal';

export default class DemoModal extends React.Component {

  state = {
    modalActive: false
  };

  activateModal = () => {
    this.setState({ modalActive: true });
  };

  deactivateModal = () => {
    this.setState({ modalActive: false });
  };

  getApplicationNode = () => {
    return document.getElementById('ember-application');
  };

  render() {
    const modal = this.state.modalActive
      ? <AriaModal
          titleText={this.props.title}
          onExit={this.deactivateModal}
          initialFocus="#demo-one-deactivate"
          getApplicationNode={this.getApplicationNode}
          underlayStyle={{ paddingTop: '2em' }}
        >
          <div id="demo-two-modal" className="modal">
            <header className="modal-header">
              <h2 id="demo-two-title" className="modal-title">
                {this.props.title}
              </h2>
            </header>
            <div className="modal-body">
              <p>
                Here is a modal
                {' '}
                <a href="#">with</a>
                {' '}
                <a href="#">some</a>
                {' '}
                <a href="#">focusable</a>
                {' '}
                parts.
              </p>
              <input onChange={(e) => this.props.onTextChange(e.target.value)} value={this.props.title}/>
            </div>
            <footer className="modal-footer">
              <button id="demo-one-deactivate" onClick={this.deactivateModal}>
                deactivate modal
              </button>
            </footer>
          </div>
        </AriaModal>
      : false;

    return (
      <div>
        <button onClick={this.activateModal}>
          activate modal
        </button>
        {modal}
      </div>
    );
  }
}
