import React, { Component } from 'react';
import ms from 'ms';

class Popup extends Component {
  onClick = () => {
    this.props.close();
  };

  refresh = () => {
    window.location.reload();
  };

  render() {
    return (
      <div className="popup">
        <div className="popup-inner">
          <button className="close" onClick={this.onClick}>
            &times;
          </button>
          <h2>Congratulations, you win!</h2>
          <p>Time: {ms(this.props.gameTime)}</p>
          <button className="btn btn-default" onClick={this.refresh}>
            New game
          </button>
        </div>
      </div>
    );
  }
}

export default Popup;
