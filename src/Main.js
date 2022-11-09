import React from 'react';
import HornedBeast from './HornedBeast.js';
import data from './data.json';
import './Main.css';

class Main extends React.Component {
  render() {
    
    let beastArray = [];
    data.forEach((beast, idx) => {
      beastArray.push(
      <HornedBeast
        imageURL={beast.image_url}
        title={beast.title}
        description={beast.description}
      key={idx}
      />
      )
    });
    return (
      <main>
        {beastArray}
      </main>
    )
  }
}

export default Main;
