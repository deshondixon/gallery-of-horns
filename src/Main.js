import React from "react";
import Form from "react-bootstrap/Form";
import HornedBeast from "./HornedBeast.js";
import "./Main.css";

class Main extends React.Component {
  render() {
    let beastArray = this.props.beastData.map((beast, idx) => {
      return (
        <HornedBeast
          imageURL={beast.image_url}
          title={beast.title}
          description={beast.description}
          key={idx}
          handleOpenModal={() => this.props.handleOpenModal(beast)}
          id={beast._id}
          horns={beast.keyword}
        />
      );
    });
    return (
      <>
        <main>
          <Form id="form">
            <fieldset>
              <Form.Group className="beastHorn">
                <Form.Label id="labelForm" htmlFor="Select">
                  🦄
                </Form.Label>
                <Form.Select id="Select" onChange={this.props.filter}>
                  <option>Search 🦄</option>
                  <option value={1}>1 🦄</option>
                  <option value={2}>2 🦄's</option>
                  <option value={3}>3 🦄's</option>
                  <option value={100}>100 🦄's</option>
                </Form.Select>
              </Form.Group>
            </fieldset>
          </Form>
          <article id="display>">{beastArray}</article>
        </main>
      </>
    );
  }
}

export default Main;
