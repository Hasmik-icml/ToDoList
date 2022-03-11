import "./TodoForm.css";

import { useState, useRef, useEffect} from "react";

function TodoForm({onAdd, todos,setTodos}){
    const [text, setText] = useState("");
 

    const ref = useRef(null);

    let searchText = "";
    let filteredTodos="";
    useEffect(()=>{
    ref.current.addEventListener("keyup", (e)=>{
        console.log(todos)
        
    let id = setTimeout(()=>{ 
        // debugger;
        searchText = e.target.value.toLowerCase();//sdjshdjshjdhs
        console.log("searchText",searchText)
        if(!searchText){
             filteredTodos = todos
        }else {
            filteredTodos = todos.filter(todo => {
                return todo.text.toLowerCase().indexOf(searchText) !== -1
            })}
            console.log(filteredTodos)
            setTodos(filteredTodos)
          }, 1000)
          
          return () => clearInterval(id);
          
        })
    },[text]);

    return (
        <form onSubmit = {(e) => {
            e.preventDefault();
           if (text !== "") onAdd(text);
           setText("");
            }} className="todoAppForm">

            <input ref = {ref} type="text" className="todoInput" placeholder="enter text" value={text} onChange={(e)=>{
                setText(e.target.value);
            }}/>
            <button className="todoAppAddButton">Add</button>
        </form>
    )
}
export default TodoForm;