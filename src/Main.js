import React from 'react';
import HornedBeast from './HornedBeast.js';

class Main extends React.Component {
  render() {
    return (
      <main>
        <article>
          <HornedBeast title="UniWhal"/>
          <p>A unicorn and a narwhal nuzzling their horns</p>

          <HornedBeast title="Rhino Family"/>
          <p>Parent rhino with two babies</p>

          <HornedBeast title="Unicorn Head"/>
          <p>Someone wearing a very silly unicorn head mask</p>
        </article>
      </main>
    )
  }
}

export default Main;
