import React, {Component, useContext} from 'react';
import {TodoContext} from "../contexts/TodoContext";

function TodoTable() {
    const context = useContext(TodoContext);

    return (
        <div>
            {context.todos.map(todo => (
                <div key={todo.id}>
                    <h2>{todo.title}</h2>
                    <p>{todo.completed ? 'Completed' : 'Not Completed'}</p>
                </div>
            ))}
        </div>
    );
}

export default TodoTable;