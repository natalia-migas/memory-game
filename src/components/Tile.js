import React, { Component } from 'react';

class Tile extends Component {
  state = {
    isHidden: false,
    isOff: false,
    isDisabled: true
  };
  hideTiles() {
    setTimeout(() => {
      this.setState({
        isHidden: true,
        isDisabled: false
      });
    }, 1500);
  }

  componentDidMount() {
    this.hideTiles();
  }

  onClick = e => {
    e.preventDefault();
    this.setState({
      isHidden: false,
      isDisabled: true
    });
    this.props.onTileChange(this);
  };

  render() {
    return (
      <button
        className={`tile ${this.props.color} ${
          this.state.isHidden ? 'hide' : ''
        } ${this.state.isOff ? 'off' : ''}`}
        onClick={this.onClick}
        disabled={this.state.isOff || this.state.isDisabled}
      />
    );
  }
}

export default Tile;
