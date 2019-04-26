import React from 'react';

const Todo = props => {
   
let classNames="todo-list";
if(props.todo.completed ===true){
    classNames += " completed";
}

function updateCompletedHere(){
    props.completeCheck(props.todo.id);
   
}
    return (
        <div className={classNames}>
            <p>Task: {props.todo.task}</p>
            <p>Completed: {props.todo.completed} <input onClick={updateCompletedHere} type="checkbox"></input></p>
        </div>

    )
}


export default Todo;