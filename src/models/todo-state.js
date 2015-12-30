import {observable} from 'mobservable';
import axios from 'axios';

const API_URL = 'https://zs-todo-api.herokuapp.com/';
const TODOS_URL = API_URL + 'todos';

const todoState = observable({
  current: "",
  todos: []
});

todoState.loadTodos = async function() {
  var response = await axios.get(TODOS_URL);
  todoState.todos = response.data;
};

todoState.addTodo = async function() {
  var todo = {name: this.current};
  var response = await axios.post(TODOS_URL, todo);
  todoState.todos.unshift(response.data);
  this.current = "";
};

export default todoState;
