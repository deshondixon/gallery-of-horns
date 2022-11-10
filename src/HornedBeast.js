import React from "react";
import Button from "react-bootstrap/Button";
import "./HornedBeast.css";

class HornedBeast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      favorites: 0,
    };
  }

  handleFavs = () => {
    this.setState({
      favorites: this.state.favorites + 1,
    });
  };

  handleDescriptionClick = () => {
    this.props.handleOpenModal(this.props.description);
  };

  render() {
    console.log(this.props);
    return (
      <article>
        <h2 onClick={this.handleDescriptionClick}>{this.props.title}</h2>
        <p>{this.state.favorites} 💚 Favs</p>
        <Button onClick={this.handleFavs}>💚</Button>
        <img
          src={this.props.imageURL}
          alt={this.props.alt}
          title={this.props.title}
        />
        <p></p>
      </article>
    );
  }
}

export default HornedBeast;
