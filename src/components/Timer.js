import React, { Component } from 'react';

class Timer extends Component {
  state = {
    time: 0,
    isOn: false,
    start: 0
  };

  componentWillReceiveProps = nextProps => {
    const { isTimerOn } = nextProps;

    if (isTimerOn && !this.state.isOn) this.startTimer();
    else if (!isTimerOn && this.state.isOn) this.stopTimer();
  };

  startTimer = () => {
    this.setState({
      isOn: true,
      time: this.state.time,
      start: Date.now() - this.state.time
    });
    this.timer = setInterval(() => {
      this.setState({
        time: Date.now() - this.state.start
      });
    }, 1);
  };

  stopTimer = () => {
    this.setState({ isOn: false });
    clearInterval(this.timer);
    this.props.getTime(this.state.time);
  };

  render() {
    return <div />;
  }
}

export default Timer;
