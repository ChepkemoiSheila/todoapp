import React from 'react'


function Todoitem({text, todo, todos, setTodos,editTodo, setEditTodo, filteredTodo}) {
    const deleteHandler = () =>{
        setTodos(todos.filter((el) => el.id!== todo.id));

    };
    const editHandler = () =>{
        const findTodo = todos.find((item) => item.id === todo.id);
        setEditTodo(findTodo);

    };
    const completeHandler =() => {
        setTodos(todos.map ((item) => {
            if(item.id === todo.id) {
                return {
                    ...item, completed: !item.completed,
                };
            
            }
            return item;
        }))
    };
    
    return (
        <div className="todoitem">
            <li className={`items-todo ${todo.completed? "completed": ""}`}>{text} </li>
            <div  className= "buttons">
            <button onClick = {completeHandler} className="complete"><i className="fa fa-check-circle-o" aria-hidden="true"></i></button>
            <button onClick ={editHandler} className="editbtn"><i className="fa fa-pencil-square-o" aria-hidden="true"></i></button>
            <button onClick = {deleteHandler} className="delete"><i className="fa fa-trash"  aria-hidden="true"></i></button>
            </div>
        </div>
    )
}

export default Todoitem
