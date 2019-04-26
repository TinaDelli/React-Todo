import React from "react";

const TodoForm = props => {
    return (
<form onSubmit={props.addTodo} >
          <input 
          placeholder="Task"
          value={props.todo.task}
          onChange={props.handleChanges}
          name="task"
          required
          />
           <button>Add Todo</button>
         
        </form>
    );
};
export default TodoForm; 