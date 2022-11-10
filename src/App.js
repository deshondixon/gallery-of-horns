import React from "react";
import Header from "./Header.js";
import Main from "./Main.js";
import Footer from "./Footer.js";
import Modal from "react-bootstrap/Modal";
import data from "./data.json";
import "./App.css";
import { ModalBody, ModalHeader } from "react-bootstrap";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalShown: false,
      title: "",
      description: "",
    };
  }

  handleCloseModal = () => {
    this.setState({
      isModalShown: false,
    });
  };

  handleOpenModal = (title, description) => {
    console.log(title);
    console.log(description);
    this.setState({
      isModalShown: true,
      title: title,
      description: description,
    });
  };

  render() {
    return (
      <>
        <Header />
        <Main handleOpenModal={this.handleOpenModal} data={data} />
        <Footer />
        <Modal show={this.state.isModalShown} onHide={this.handleCloseModal}>
          <ModalHeader />
          <ModalBody />
          <Modal.Header closeButton>
            <Modal.Title>{this.state.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>{this.state.description}</Modal.Body>
        </Modal>
      </>
    );
  }
}

export default App;
