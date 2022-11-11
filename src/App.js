import React from "react";
import Header from "./Header.js";
import Main from "./Main.js";
import Footer from "./Footer.js";
import SelectedBeast from "./SelectedBeast.js";
import data from "./data.json";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      beastData: data,
      isModalShown: false,
      selectedBeast: null,
    }
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
        <Header/>
        <Main 
        handleOpenModal={(this.handleOpenModal)} 
        beastData={this.state.beastData} />
      
        { this.state.selectedBeast &&
        <SelectedBeast
            show={this.state.isModalShown}
            onHide={this.handleCloseModal}
            selectedBeast={this.state.selectedBeast}
      
          
          />
        }
        <Footer/>
      </>
    );
  }
}

export default App;
