import React from 'react';
import Modal from 'react-bootstrap/Modal';
import './SelectedBeast.css';

class SelectedBeast extends React.Component {
  render() {
    return (
      <>
        <Modal
          show={this.props.show}
          onHide={this.props.onHide}
          size="lg"
          centered>
            <Modal.Header closeButton>
              <Modal.Title>{this.props.selectedBeast.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <img
                src={this.props.selectedBeast.image_url}
                alt={this.props.title}
                title={this.props.selectedBeast.description}
       />
            </Modal.Body>
            <p>{this.props.selectedBeast.description}</p>
            <Modal.Footer>
            </Modal.Footer>
          </Modal>
      </>
    );
  }
}

export default SelectedBeast;
