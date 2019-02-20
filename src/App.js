import React, {Component} from 'react';
import './App.css';

class App extends Component {
    constructor() {
        super();
        this.state = {
            todo: '',
            allTodo: []
        }
    }

    captureTodo = (event) => {
        this.setState({ todo: event.target.value})
    };

    addTodo = (event) => {
        event.preventDefault()
        const newTodo = this.state.todo;
        const todoArray = [...this.state.allTodo, newTodo];
        this.setState({
            todo: '',
            allTodo: todoArray
        });
        console.log(this.state.allTodo);
    }

    render() {
        const todoList = this.state.allTodo.map((todo, index) => {
            return <li key={index}>{todo}</li>
        });
        return (
            <div className="App">
                <h2>Todo App</h2>
                <input placeholder='enter something to do' value={this.state.todo} onChange={this.captureTodo}/>
                <button onClick={this.addTodo}>Add</button>
                <ul>{todoList}</ul>
            </div>
        );
    }
}

export default App;
