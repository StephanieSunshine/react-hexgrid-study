import React, { Component } from 'react';
import { HexGrid, Layout, Hexagon } from 'react-hexgrid'; // Path
// import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.hexagonSize = { x: 3, y: 3};
    this.min = -6;
    this.max = 6;
    this.starting_grid = [];
    this.state = {class: "defaultTile"};
    var q;
    var r;


    for(r=this.min;r<=0;r++) {
      for(q=this.min-r;q<=this.max;q++) {
        this.starting_grid.push([q,r]);
      }
    }

    for(r=1;r<=this.max;r++) {
      for(q=this.min;q<=this.max-r;q++) {
        this.starting_grid.push([q,r]);
      }
    }
  }

  onClick(event) {
    console.log(event);
    console.log(this);
    this.setState({class: 'hitTile'});
  }

  onMouseOver() {
    console.log(this);
  }

  onMouseLeave() {
  }

  render() {
    return (
      <div className="App">
        <HexGrid width={1200} height={800}>
        {/* Grid with manually inserted hexagons */}
          <Layout size={this.hexagonSize} flat={false} spacing={1.1} origin={{ x: 0, y: 0 }}>
            {this.starting_grid.map((pair, index) => {
            var hexid="hexagon-"+index;
            return(<Hexagon id={hexid} key={hexid} className={this.state.class} q={pair[0]} r={pair[1]} s={0} onClick={this.onClick.bind(this)} />);
            })}
          </Layout>
        </HexGrid>
      </div>
    );
  }
}

export default App;
