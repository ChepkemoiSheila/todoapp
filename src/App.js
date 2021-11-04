import React, {useState, useEffect} from "react"
import Form from "./components/form/Form"
import List from "./components/list/List"
import "./App.css"


function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [editTodo, setEditTodo] = useState(null);
  const [status, setStatus] = useState("all");
  const [filteredTodo, setFilteredTodo] = useState([]);

  useEffect(() => {
    const filterHandler =()=> {
      switch (status){
        case 'Completed' :
        setFilteredTodo(todos.filter((todo) => todo.completed === true));
        break;
        case 'Uncompleted' :
        setFilteredTodo(todos.filter((todo) => todo.completed === false ));
        break;
        default:
        setFilteredTodo(todos);
        break;
  
      }
    };
    filterHandler();
  }, [todos, status]);
  

  const clearHandler = () =>{
    setTodos([]);
  };
   
 

   return (
    <div className="container">
    <div className="wrapper">
    <header className = "title">
           <h1>ToDo App </h1>

       </header>
      <Form setInputText = {setInputText}
    inputText = {inputText}
    todos = {todos}
    setTodos = {setTodos}
    editTodo={editTodo}
    setEditTodo={setEditTodo}
    setStatus = {setStatus}
    
    
   />
    <List todos = {todos}
    setTodos ={setTodos}
    editTodo={editTodo}
    setEditTodo= {setEditTodo}
  filteredTodo = {filteredTodo}
  setFilteredTodo= {setFilteredTodo}
    
   
    />
    
    <button onClick = {clearHandler} className = "clearall">Clear All ToDos</button>
    
    
    </div>


    
    </div>
    
    
  );
}

export default App;
