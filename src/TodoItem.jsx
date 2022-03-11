import { useEffect, useRef, useState } from "react";

function TodoItem({todo, todos, setTodos, onChange, onDelete, onEdit, onAdd }){
    const [edit, setEdit] = useState(null);
    const [value, setValue] = useState("");
    const focusRef = useRef();

    // const ref = useRef(0);
function editTodo(id){
    setEdit(id)
}
function saveTodo(id){
    setTodos(todos.map(item=>{
        if(item.id == id){
            item.text = value
        }
        return item;
    }))
    setEdit(null);
}
useEffect(()=>{
    console.log("its edit change", edit)
    console.log("ref", focusRef)
    if(focusRef.current) focusRef.current.focus();
}, [edit])

    return (
        <div key={todo.id} className="lable">
            {(edit === todo.id) ? <div><input ref = {focusRef} type="text" value={value} onChange={(e)=>{
                  setValue(e.target.value)
                    }}/> </div>: 
            <label className="lableText">
                <input  type="checkbox" checked={todo.isCompleted} onChange={(e)=>{
                        onChange({
                            ...todo,
                            isCompleted: e.target.checked
                        })
                    }} />
                    {todo.text}
                </label>
            }

            {(edit === todo.id) ? <div><button onClick={()=>{saveTodo(todo.id)}}>Edit</button></div>:


            <div className="button">
                    <button onClick={()=>{
                        onDelete(todo);
                    }}>x</button>
    
                    <button onClick={()=>{
                        
                        editTodo(todo.id)
                    }}>Edit</button>
            </div>
            }
        </div>
    )
}
export default TodoItem;