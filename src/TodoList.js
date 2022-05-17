import React from "react";

export default function TodoList({todos,setTodos}) {

    const handleDelete = ({id}) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    }

    return (
        <div>
            {
            todos.map((todo) =>{
                return <li className="list-item" key={todo.id}>
                    <input type="text" value={todo.title} className="list"
                    onChange={(event) => event.preventDefault()}>
                    </input>
                    <div>
                    <button className="button-delete task-button" onClick={() => handleDelete(todo)}>
                    <i className="fa fa-trash"></i>
                    </button>
                    </div>
                </li>
            })
          }
        </div>
    )
}

