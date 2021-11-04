import React, {useEffect} from 'react'

import { v4 as uuidv4 } from 'uuid';


function Form({ inputText, setInputText, todos,todo, setTodos, setEditTodo, editTodo, setStatus }) {
    const updateTodo = (text, id, completed)=>{
        const newTodo = todos.map ((item) => 
            item.id === id ? {text, id, completed} : item);

        setTodos(newTodo);
        setEditTodo("");

    };
    useEffect(() => {
        if(editTodo) {setInputText (editTodo.text);}
        
            else{ setInputText("")}
        
    }, [setInputText,editTodo]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!editTodo){
            setTodos([...todos, { text: inputText, id: uuidv4(), completed: false }

            ]);
            setInputText("");
        } else{
            updateTodo(inputText, editTodo.id, editTodo.completed)
        }
        
    };
    const statusHandler = (e)=>{
        setStatus(e.target.value)

    }
    
    const handleChange = (e) => {
        setInputText(e.target.value);

    }
    return (
        <div>
            <form className="todoform" onSubmit={handleSubmit}>
                <input type="text"
                    className="inputtodo"
                    name="inputname"
                    placeholder="Add a ToDo"
                    value={inputText}
                    onChange={handleChange} />
                <button className="todobtn" type="submit">
                {editTodo ? "OK" : "Add ToDo"}
                </button>

                <div className = "selectoptions">
                    <select name="all" onChange ={statusHandler} id="selectopt">
                    
                    <option>All</option>
                    <option>Completed</option>
                    <option>Uncompleted</option>
                    </select>
                </div>
            
            </form>
            </div>

            


    )
}

export default Form
