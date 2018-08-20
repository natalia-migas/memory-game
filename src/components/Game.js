import React, { Component } from 'react';
import Board from './Board';
import Popup from './Popup';
import Timer from './Timer';

class Game extends Component {
  state = {
    showWinPopup: false,
    timerStart: false,
    gameTime: 0
  };

  firstClick = () => {
    this.setState({
      timerStart: true
    });
  };

  onWin = () => {
    this.setState({
      showWinPopup: true,
      timerStart: false
    });
  };

  closePopup = () => {
    this.setState({
      showWinPopup: false
    });
  };

  restart = () => {
    window.location.reload();
  };

  getTime = time => {
    this.setState({
      gameTime: time
    });
  };

  render() {
    return (
      <React.Fragment>
        <h1 className="main-heading">Memory Game</h1>
        <p className="intro">
          The timer will start counting after you click the first tile and will
          display after the end of the game
        </p>
        <Board onWin={this.onWin} firstClick={this.firstClick} />
        <button className="btn btn-default" onClick={this.restart}>
          Restart game
        </button>
        <Timer isTimerOn={this.state.timerStart} getTime={this.getTime} />
        {this.state.showWinPopup && (
          <Popup close={this.closePopup} gameTime={this.state.gameTime} />
        )}
      </React.Fragment>
    );
  }
}

export default Game;
