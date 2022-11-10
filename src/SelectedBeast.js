import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import './SelectedBeast.css';

class SelectedBeast extends React.Component {
  render () {

    
    return (

      <Modal 
        show={this.props.isModalShown} 
        onHide={this.props.handleCloseModal}
        >
        <Modal.Header closeButton>
          <Modal.Title>{this.props.selectedBeast.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <img 
          src={this.props.selectedBeast.imageURL} 
          alt={this.props.description}
          />
          <p>{this.props.selectedBeast.description}</p>
        </Modal.Body>
        <Modal.Footer>
        <Button onClick={this.handleFavs}>CLOSE</Button>
        </Modal.Footer>
        </Modal>

    )
  }
}


export default SelectedBeast;
