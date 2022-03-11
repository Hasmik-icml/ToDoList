import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import TodoFooter from './TodoFooter';

function App() {
  const [todos, setTodos] = useState([
    {
      id: Math.random(),
      text: "Learn JS",
      isCompleted: false,
      editable: false
    },
    {
      id: Math.random(),
      text: "Learn CSS",
      isCompleted: false,
      editable: false
    },
    {
      id: Math.random(),
      text: "Learn React",
      isCompleted: false,
      editable: false
    }
  ]);
  const [newTodos, setNewTodos] = useState(todos);

  return (
    <div className="App">

    <TodoForm 
    todos={todos}
    setTodos={(filteredTodos)=>{
      console.log("its todos",filteredTodos)
      setNewTodos(filteredTodos)}}
    onAdd={text => {
      setTodos([...todos,
      {
        id: Math.random(),
        text: text,
        isCompleted: false,
        editable: false
      }]);
    }}/>

    <TodoList
     todos={newTodos ? newTodos : todos}
     setTodos={setTodos}
    // onEdit=
    // {
    //   (editableTodo) =>
    // {
    //   //  prompt(editableTodo, editableTodo.text)
    //   setTodos(todos.map(t=>{
    //     if (editableTodo.id = t.id){
    //       return {...t, editable: !t.editable}
    //     }
    //   }));
    // }
    // }

     onChange={(newTodo)=>{
       setTodos(todos.map(todo=>{
         if(todo.id === newTodo.id){
           return newTodo;
         }
         return todo;
       }))
     }}

     onDelete={(todo)=>{
       setTodos(todos.filter(t=> todo.id != t.id));
     }}
     />
    <TodoFooter todos={todos} onClearCompleted={()=>{
      setTodos(todos.filter(todo => !todo.isCompleted))
    }}/>
    </div>
  );
}

export default App;
