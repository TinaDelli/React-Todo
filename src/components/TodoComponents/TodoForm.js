import React from "react";

const TodoForm = props => {
    return (
<form onSubmit={props.addTodo}>
          <input 
          placeholder="Task"
          value={props.todo.task}
          onChange={event => props.handleChanges(event)}
          name="task"
          />
        {/* <input 
          placeholder="ID"
          value={props.todo.id}
          onChange={event => props.handleChanges(event)}
          name="id"
          />
          <input 
          placeholder="Completed?"
          value={props.todo.completed}
          onChange={event => props.handleChanges(event)}
          name="completed"
          /> */}
           <button>Add Todo</button>
           <button>Clear Completed</button>
        </form>
    );
};
export default TodoForm; 