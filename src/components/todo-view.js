import React, {Component} from 'react';
import {observer} from 'mobservable-react';
import todoState from '../models/todo-state';

@observer
class TodoView extends Component {
  constructor(props) {
    super(props);
    todoState.loadTodos();
  }
  onReload() {
    todoState.loadTodos();
  }
  addTodo() {
    todoState.addTodo();
  }
  currentChange(e) {
    var val = e.target.value;
    todoState.current = val;
  }

  render() {
    return (
      <div>
        <h1>Todos</h1>
        <p> Now typing: <b>{todoState.current}</b> </p>
        <input type="text"
          value={todoState.current}
          onChange={this.currentChange.bind(this)}/>
        <button onClick={this.addTodo}>Add</button>
        <ul>
          {todoState.todos && todoState.todos.map((todo, i)=>
            <li key={i}>{todo.name}</li>
          )}
        </ul>
        <button onClick={this.onReload}>
          Reload
        </button>
      </div>
    );
  }
};

export default TodoView;
