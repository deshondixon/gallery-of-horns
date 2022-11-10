import React from "react";
import Header from "./Header.js";
import Main from "./Main.js";
import Footer from "./Footer.js";
import SelectedBeast from "./SelectedBeast.js";
import data from "./data.json";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalShown: false,
      beasts: data,
      selectedBeast: null,
    };
  }

  handleCloseModal = () => {
    this.setState({
      isModalShown: false,
    });
  };

  handleOpenModal = (beast) => {
    this.setState({
      isModalShown: true,
      selectedBeast: beast
    });
  };

  render() {
    return (
      <>
        {this.state.selectedBeast && (
          <SelectedBeast
            showModal={this.state.showModal}
            handleCloseModal={this.handleCloseModal}
            selectedBeast={this.state.selectedBeast}
          />
        )}

        <Header />
        <Main
          handleOpenModal={this.handleOpenModal}
          beasts={this.state.beasts}
        />
        <Footer/>
      </>
    );
  }
}

export default App;
