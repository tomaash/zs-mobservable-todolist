import React, {Component} from 'react';
import TimerView from './timer-view';
import TodoView from './todo-view';

class AppView extends Component {
  render() {
    return (
      <div>
        <TodoView/>
        <TimerView/>
      </div>
    )
  }
}

export default AppView;
