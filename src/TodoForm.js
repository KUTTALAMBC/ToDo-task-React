import React from "react";
import {v4 as uuidv4} from "uuid";

export default function TodoForm({input, setInput, todos, setTodos}){

    const onInputChange = (event) =>{
        setInput(event.target.value);
    }

    const onFormSubmit = (event) =>{
        event.preventDefault();
        setTodos([...todos, {id : uuidv4(), title: input, completed : false}])
        setInput('');
    }

    return (
    
        <form onSubmit={onFormSubmit}>
            <input type="text" placeholder="ENTER YOUR WORK TODO...." 
            className="task-input" value={input} required onChange={onInputChange}>
            </input>
            <button className="button-add" type="submit">ADD</button>
        </form>

    )}