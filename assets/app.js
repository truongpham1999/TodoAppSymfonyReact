/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you import will output into a single css file (app.css in this case)
/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you import will output into a single css file (app.css in this case)
import './styles/app.css';
import React, {Component} from 'react';
import {createRoot} from 'react-dom/client';
import TodoTable from "./components/TodoTable";
import TodoContextProvider from "./contexts/TodoContext";

class App extends Component {
    render() {
        return (
            <TodoContextProvider>
                <TodoTable/>
            </TodoContextProvider>
        );
    }
}

// ReactDOM.render(<App />, document.getElementById('root'));

// Corrected for React 18
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);  // Create a root
root.render(<App />);  // Use the new render method