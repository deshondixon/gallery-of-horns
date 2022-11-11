import React from "react";
import HornedBeast from "./HornedBeast.js";
import "./Main.css";

class Main extends React.Component {
  render() {
    return (
      <>
        <main>
          {this.props.beastData.map((beast, idx) => (
            <HornedBeast
              imageURL={beast.image_url}
              title={beast.title}
              description={beast.description}
              key={idx}
              handleOpenModal={() => this.props.handleOpenModal(beast)}
              id={beast._id}
              horns={beast.keyword}
            />
          ))}
        </main>
      </>
    );
  }
}

export default Main;
