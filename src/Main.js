import React from "react";
import HornedBeast from "./HornedBeast.js";
import "./Main.css";

class Main extends React.Component {
  render() {
    return (
      <>
        <div className="mainBeast">
          {this.props.beasts.map((beasts, idx) => (
            <HornedBeast
              imageURL={beasts.image_url}
              title={beasts.title}
              description={beasts.description}
              key={idx}
              handleOpenModal={() => this.props.handleOpenModal(beasts)}
            />
          ))
          }
        </div>
      </>
    );
  }
}

export default Main;
