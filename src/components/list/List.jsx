import React from 'react'
import "./list.css"
import Todoitem from '../todoitem/Todoitem';



function List({todos, todo, setTodos, setEditTodo, editTodo, filteredTodo, setFilteredTodo }) {
    
    return (
        <div className = "todo-item">
        <ul className="listitems">
        {filteredTodo.map((todo) =>
        <Todoitem todos = {todos}
        setTodos ={setTodos}
         key= {todo.id} 
         todo = {todo}
         text = {todo.text}
         setEditTodo ={setEditTodo}
         editTodo ={editTodo}
         filteredTodo = {filteredTodo}
         />)}
        </ul>
       
            
        </div>
    )
}

export default List
