import React, {Component} from 'react';
import {observer} from 'mobservable-react';
import timerState from '../models/timer-state';

@observer
class TimerView extends Component {
  onReset() {
    timerState.resetTimer();
  }

  render() {
    return (
      <button onClick={this.onReset.bind(this)}>
        Seconds passed: {timerState.timer}
      </button>
    );
  }
}

export default TimerView;
