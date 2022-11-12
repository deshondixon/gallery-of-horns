import React from "react";
import Header from "./Header.js";
import Main from "./Main.js";
import Footer from "./Footer.js";
import SelectedBeast from "./SelectedBeast.js";
import data from "./data.json";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.js";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      beastData: data,
      isModalShown: false,
      selectedBeast: null,
    };
  }

  handleFilter = (event) => {
    console.log(event.target.value);
    if (event.target.value !== "Search of 🦄") {
      let newData = data.filter(
        (beast) => beast.horns === parseInt(event.target.value)
      );
      this.setState({ beastData: newData });
    } else {
      this.setState({ beastData: data });
    }
  };

  handleCloseModal = () => {
    this.setState({
      isModalShown: false,
    });
  };

  handleOpenModal = (beast) => {
    this.setState({
      isModalShown: true,
      selectedBeast: beast,
    });
  };

  render() {
    return (
      <>
        {this.state.selectedBeast && (
          <SelectedBeast
            show={this.state.isModalShown}
            onHide={this.handleCloseModal}
            selectedBeast={this.state.selectedBeast}
          />
        )}
        <Header />
        <Main
          handleOpenModal={this.handleOpenModal}
          beastData={this.state.beastData}
          beasts={this.state.data}
          filter={this.handleFilter}
        />
        <Footer />
      </>
    );
  }
}

export default App;
