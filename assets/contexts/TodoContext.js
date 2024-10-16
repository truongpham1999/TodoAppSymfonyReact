import React, {Component} from 'react';

export const TodoContext = React.createContext();
class TodoContextProvider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [
                {id: 1, title: 'Todo 1', completed: true},
                {id: 2, title: 'Todo 2', completed: false},
                {id: 3, title: 'Todo 3', completed: false},
            ]
        };

        this.createTodo = this.createTodo.bind(this);
        this.updateTodo = this.updateTodo.bind(this);
        this.deleteTodo = this.deleteTodo.bind(this);
    }

    // read

    // create
    createTodo(todo) {
        console.log('Creating Todo:', todo);
    }

    // update
    updateTodo(id, updatedTodo) {
        console.log('Updating Todo with id:', id, 'Updated data:', updatedTodo);
    }

    // delete
    deleteTodo(id) {
        console.log('Deleting Todo with id:', id);
    }

    render() {
        return (
            <TodoContext.Provider
                value={{
                    ...this.state,
                    createTodo: this.createTodo,
                    updateTodo: this.updateTodo,
                    deleteTodo: this.deleteTodo
                }}
            >
                {this.props.children}
            </TodoContext.Provider>
        );
    }
}

export default TodoContextProvider;