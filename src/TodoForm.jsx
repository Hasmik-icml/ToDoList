import "./TodoForm.css";

import { useState, useRef, useEffect} from "react";

function TodoForm({onAdd, todos, setTodos, newTodos}){
    const [text, setText] = useState("");
   

    let searchText = "";
    let filteredTodos="";
    // useEffect(()=>{
    // ref.current.addEventListener("keyup", (e)=>{
    
    // let id = setTimeout(()=>{ 
    //     // debugger;
    //     searchText = e.target.value.toLowerCase();//sdjshdjshjdhs
    //     console.log("searchText",searchText)
    //     if(!searchText){
    //          filteredTodos = todos;
    //     }else {
    //         filteredTodos = todos.filter(todo => {
    //             return todo.text.toLowerCase().indexOf(searchText) !== -1
    //         })}
    //         console.log(filteredTodos)
    //         setTodos(filteredTodos)
    //       }, 1000)
          
    //       return () => clearInterval(id);
          
    //     })
    // },[text]);

    return (
      
        <form onSubmit = {(e) => {
            e.preventDefault();
           if (text !== "") onAdd(text);
           setText("");
            }} className="todoAppForm">
            <p className="title">ToDo</p>
            <div className="addTodo">
            <input type="text" className="todoInput" placeholder="add new todo" value={text} onChange={(e)=>{
                setText(e.target.value);
            }}/>
            <button className="todoAppAddButton">Add</button>
            </div>
        </form>
    )
}
export default TodoForm;