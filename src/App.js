import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';
import './components/TodoComponents/Todo.css';

const todo=[
  
    {
      task: 'Organize Garage',
      id: 1528817077286,
      completed: false
    },
    {
      task: 'Bake Cookies',
      id: 1528817084358,
      completed: false
    }
  
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
constructor(){
  super();
  this.state={
    todoList : todo,
    newTodo: {
      task:"",
      id: "",
    }
  };
}

handleChanges = event => {
  this.setState({
    newTodo: {
      ...this.state.newTodo,
      [event.target.name]: event.target.value,
      // completed: !this.state.completed,
    }
  });
}

addTodo = event => {
  event.preventDefault();
  this.setState({
    todoList: [...this.state.todoList, this.state.newTodo],
    newTodo:{
      task:"",
      id: Date.now(),
      // completed: false,
    }
  })
}

completeCheck = id => {
  console.log(id);
  this.setState({ 
    todoList: this.state.todoList.map(todo => 
      (todo.id === id ? {...todo, completed: !todo.completed} : todo ),
    )});
  
}

removeCompleted = () => {
  const newTodoCompleted = this.state.todoList.filter(todo => {
    return !todo.completed;
  });
  this.setState({
    todoList: newTodoCompleted
  });
}

  render() {

    return (
      <div className="App">
        <h2 className="header">Welcome to your Todo App!</h2>

        <TodoList 
        todoList={this.state.todoList} 
        completeCheck={this.completeCheck}
        />
        <TodoForm 
           
            todo={this.state.newTodo} 
            handleChanges={this.handleChanges} 
            addTodo={this.addTodo}
            removeCompleted={this.removeCompleted}
        />
        <button onClick={this.removeCompleted}>Clear Completed</button>
      </div>
    );
  }
}

export default App;
