import "babel-polyfill";
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {observable} from 'mobservable';
import {observer} from 'mobservable-react';
import axios from 'axios';

// uncomment next line to enable the dev-tools.
require('mobservable-react-devtools');

const API_URL = 'https://zs-todo-api.herokuapp.com/';
const TODOS_URL = API_URL + 'todos';

const appState = observable({
  timer: 0,
  todos: []
});

appState.resetTimer = function() {
  appState.timer = 0;
};

appState.loadTodos = async function() {
  var response = await axios.get(TODOS_URL);
  appState.todos = response.data;
};

appState.addTodo = async function(data) {
  var response = await axios.post(TODOS_URL, data);
  appState.todos.unshift(response.data);
};

setInterval(() => {
  appState.timer += 1;
}, 1000);


@observer
class TimerView extends Component {
  constructor(props) {
    super(props);
    this.props.appState.loadTodos();
    this.onReset = this.onReset.bind(this);
    this.onReload = this.onReload.bind(this);
    this.addTodo = this.addTodo.bind(this);
  }
  componentWillMount() {

  }
  onReset() {
    this.props.appState.resetTimer();
  }
  onReload() {
    this.props.appState.loadTodos();
  }
  addTodo() {
    var name = this.refs.todoInput.value;
    this.props.appState.addTodo({name});
    this.refs.todoInput.value = "";
  }

  render() {
    return (
      <div>
        <h1>Todos</h1>
        <input type="text" ref="todoInput"/>
        <button onClick={this.addTodo}>Add</button>
        <ul>
          {
          this.props.appState.todos && this.props.appState.todos.map((todo, i)=>
            <li key={i}>{todo.name}</li>
          )
          }
        </ul>
        <button onClick={this.onReload}>
          Reload
        </button>
        <button onClick={this.onReset}>
          Seconds passed: {this.props.appState.timer}
        </button>
      </div>
    );
  }
};

ReactDOM.render(<TimerView appState={appState} />, document.getElementById('root'));

