import React, { Component } from 'react';
import { HexGrid, Layout, Hexagon, Path } from 'react-hexgrid';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  onClick(event) {
    console.log(this);
  }

  onMouseOver() {
    console.log(this);

  }

  onMouseLeave() {
    // console.log(this);
    // this.fill = "blueTile";
  }

  render() {
    const hexagonSize = { x: 3, y: 3};
    const min = -6;
    const max = 6;
    var starting_grid = [];
    var q;
    var r;

    for(r=min;r<=0;r++) {
      for(q=min-r;q<=max;q++) {
        starting_grid.push([q,r]);
      }
    }

    for(r=1;r<=max;r++) {
      for(q=min;q<=max-r;q++) {
        starting_grid.push([q,r]);
      }
    }

    console.log(starting_grid);

    return (

      <div className="App">
					<HexGrid width={1200} height={800}>
				    {/* Grid with manually inserted hexagons */}
            <Layout size={hexagonSize} flat={false} spacing={1.1} origin={{ x: 0, y: 0 }}>
              {starting_grid.map((pair, index) => {
                var hexid="hexagon-"+index;
                return(<Hexagon id={hexid} key={index} className="yellowShipTile" q={pair[0]} r={pair[1]} s={0} onClick={this.onClick.bind(this)} />);
              })}
            </Layout>
				  </HexGrid>
				</div>
    );
  }
}

export default App;
