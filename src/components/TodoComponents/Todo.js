import React from 'react';

const Todo = props => {
    return (
        <div className="todo-list">
            <p>Task: {props.todo.task}</p>
            <p>ID: {props.todo.id}</p>
            <p>Completed: {props.todo.completed}</p>
        </div>

    )
}


export default Todo;