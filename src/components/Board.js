import React, { Component } from 'react';
import uuid from 'uuid';
import Tile from './Tile';

import colors from '../colors-array';
import shuffle from '../shuffle-fn';

class Board extends Component {
  state = {
    tiles: [],
    activeTiles: [],
    pairs: 0,
    firstClick: false
  };

  componentDidMount() {
    const shuffledColors = colors;
    shuffle(colors);
    this.setState({
      tiles: shuffledColors.map(color => (
        <Tile color={color} key={uuid()} onTileChange={this.getTileOnClick} />
      ))
    });
  }

  componentDidUpdate() {
    const { activeTiles, pairs, tiles } = this.state;
    if (activeTiles.length === 2) {
      if (activeTiles[0].props.color === activeTiles[1].props.color) {
        setTimeout(
          () => activeTiles.forEach(tile => tile.setState({ isOff: true })),
          500
        );
        this.setState(
          {
            activeTiles: [],
            pairs: pairs + 1
          },
          () => {
            if (this.state.pairs === tiles.length / 2) {
              this.props.onWin();
            }
          }
        );
      } else {
        setTimeout(
          () =>
            activeTiles.forEach(tile =>
              tile.setState({ isHidden: true, isDisabled: false })
            ),
          500
        );
        this.setState({
          activeTiles: []
        });
      }
    }
  }

  getTileOnClick = tile => {
    this.setState({
      activeTiles: [...this.state.activeTiles, tile],
      firstClick: !this.state.firstClick
        ? true && this.props.firstClick()
        : this.state.firstClick && !this.props.firstClick()
    });
  };
  render() {
    return <div className="board">{this.state.tiles}</div>;
  }
}

export default Board;
