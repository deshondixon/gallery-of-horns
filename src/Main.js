import React from "react";
import HornedBeast from "./HornedBeast.js";
import "./Main.css";

class Main extends React.Component {
  render() {
    let beastArray = this.props.data.map((beast, idx) => {
      return (
        <HornedBeast
          imageURL={beast.image_url}
          title={beast.title}
          description={beast.description}
          key={idx}
          handleOpenModal={this.props.handleOpenModal}
        />
      );
    });
    return <main>{beastArray}</main>;
  }
}

export default Main;
