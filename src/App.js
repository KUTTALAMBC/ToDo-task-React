import React, {useState} from 'react';
import './App.css';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

function App() {

  const [input, setInput] = useState('');
  const [todos, setTodos] = useState([]);



  return (
    <div className="container">
     <div className='app-wrapper'>
     <div className="header">
        <h1>Todo-List</h1>
    </div>
      <div>
        <TodoForm
        input = {input}
        setInput = {setInput}
        todos = {todos}
        setTodos = {setTodos}
        ></TodoForm>
      </div>
      <div>
        <TodoList todos={todos} setTodos={setTodos}></TodoList>
      </div>
     </div>
    </div>
  );
}

export default App;