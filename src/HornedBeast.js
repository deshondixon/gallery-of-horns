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

  handleFavorites = () => {
    this.setState({
      favorites: this.state.favorites + 1,
    });
  };

  handleDescriptionClick = () => {
    this.props.handleOpenModal(
      this.props.description,
      this.props.title,
      this.props.imageURL
    );
  };

  render() {
    return (
      <article>
        <h2 onClick={this.handleDescriptionClick}>{this.props.title}</h2>
        <p onClick={this.handleDescriptionClick}>
          {this.state.favorites} 🖤 Favorites
        </p>
        <Button onClick={this.handleFavorites}>🖤</Button>
        <img
          onClick={this.handleDescriptionClick}
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
